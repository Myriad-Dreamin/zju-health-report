import got, * as Got from "got";
import * as crypto from 'crypto';
import { CookieJar } from "tough-cookie";
import { HealthReportRequest } from "./interface";
import { browserCookie, userAgent } from "./conf";
import { updateAndVerifyPageHash, writeOldInfo } from "./data";

export async function healthReportSubmit(info: HealthReportRequest): Promise<void> {
    console.log('数据提交中, 请稍候...');
    const cookieJar = new CookieJar();
    await cookieJar.setCookie(browserCookie, 'https://healthreport.zju.edu.cn');
    const res = (await got.get('https://healthreport.zju.edu.cn/ncov/wap/default/index', {
        cookieJar,
        agent: false,
        headers: {
            'User-Agent': userAgent,
        }
    }))
    const page_body = res.body;
    let arr: RegExpExecArray;
    const pageDigest = [];
    const cExp = /class="([^"]*?)"/g;
    while ((arr = cExp.exec(page_body)) !== null) {
        pageDigest.push(arr[1]);
    }
    const nExp = /name="([^"]*?)"/g;
    while ((arr = nExp.exec(page_body)) !== null) {
        pageDigest.push(arr[1]);
    }
    const hasher = crypto.createHash('md5');
    hasher.update(pageDigest.sort().join('$'));
    const pageHash = hasher.digest().toString('hex');
    if (!updateAndVerifyPageHash(pageHash)) {
        console.log('new body:', page_body);
        throw new Error(`page changed, please update your code, ${pageHash}...`);
    }
    console.log('page revision:', pageHash);
    const hasFlagFromPage = /hasFlag: ([^\n]*?),/.exec(page_body);
    if (!hasFlagFromPage) {
        throw new Error("has flag not found...");
    }
    const hf = hasFlagFromPage[1].trim();
    const reqAuthFromPage = /}, def, ({[^}]*?})/.exec(page_body);
    if (!reqAuthFromPage) {
        throw new Error("reqAuth not found...");
    }
    const kvRegex = /"([^"]*?)":\s*"([^"]*?)"/g;
    const p = reqAuthFromPage[1];
    while((arr = kvRegex.exec(p)) != null) {
        info[arr[1]] = arr[2];
    }
    const oldInfoFromPage = /oldInfo: ({[^\n]*?}),\n/.exec(page_body);
    if (!oldInfoFromPage) {
        throw new Error("old info not found...");
    }
    const freshOldInfo = JSON.parse(oldInfoFromPage[1]);
    info.date = freshOldInfo.date;
    info.created = freshOldInfo.created;
    info.id = freshOldInfo.id;
    if (hf == `"1"` || hf == `'1'`) {
        console.log("您今日已提交信息，无需再提交 You have submitted today, and the submission is canceled");
        return;
    }
    writeOldInfo(info.date, info);
    const resp: Got.Response<any> = await got.post('https://healthreport.zju.edu.cn/ncov/wap/default/save', {
        cookieJar,
        agent: false,
        form: info,
        headers: {
            'x-requested-with': 'XMLHttpRequest',
            'User-Agent': userAgent,
        },
    });
    console.log(resp);
    console.log(resp.statusCode);
    console.log(resp.statusMessage);
    if (resp.body.e == 0) {
        console.log("您已提交信息 You have submitted");
        console.log(resp.body);
    } else {
        console.error(resp.body);
    }
    return;
}

