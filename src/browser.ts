
import { HealthReportRequest } from './interface';
import { $jquery, defStrMagicOk, wapalert, wapconfirm } from './browser.fix';
import { healthReportSubmit } from './submit';

function vueBrowserValid(sfzgn: number, info: HealthReportRequest): boolean {
    // let falg = false;
    // for(let i in this.country) {
    //     if(this.country[i]['name'] == info.szgj) {
    //         falg = true;
    //     }
    // }
    // if(!falg) {
    //     info.szgj = '';
    // }


    if (info.sfyxjzxgym === '') {
        wapalert('请选择是否意向接种', false, function () {
            $jquery("[name=sfyxjzxgym]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (info.sfbyjzrq < 1) {
        wapalert('请选择是否是不宜接种人群', false, function () {
            $jquery("[name=sfbyjzrq]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (info.jzxgymqk < 1) {
        wapalert('请选择当前接种情况', false, function () {
            $jquery("[name=jzxgymqk]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (info.sfzx === '') {
        wapalert('请选择今日是否在校', false, function () {
            $jquery("[name=sfzx]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (info.tw !== '1' && info.tw !== '0') {
        wapalert('请选择今日是否发热', false, function () {
            $jquery("[name=tw]").get(0).scrollIntoView(false);
        });
        return false;
    }


    // if(this.showFxyy && info.fxyy == '') {
    //     wapalert('请填写返校原因', false, function () {
    //         $("[name=fxyy]").focus();
    //         $("[name=fxyy]").get(0).scrollIntoView(false);
    //     });
    //     return false;
    // }


    if (info.ismoved == 1 && info.bztcyy == '') {
        wapalert('请选择不和前一天同城原因', false, function () {
            $jquery("[name=bztcyy]").get(0).scrollIntoView(false);
        });
        return false;
    }
    //  if(info.sfjcbh==1 && info.jcbhrq==''){
    //      wapalert('请填写接触疑似人群时间', false, function () {
    //                 $("[name=jcbhrq]").get(0).scrollIntoView(false);
    //             });
    //             return false;
    //  }
    // if(info.sfjcqz==1 && info.jcqzrq==''){
    //      wapalert('请填写接触确诊人群时间', false, function () {
    //                 $("[name=jcqzrq]").get(0).scrollIntoView(false);
    //             });
    //             return false;
    //  }

    // if(info.sfcxtz == 1) {
    //     if(info.sfyyjc == 1 && info.jcjgqr == '') {
    //         wapalert('请选择检查结果属于以下哪种情况', false, function () {
    //             $("[name=jcjgqr]").get(0).scrollIntoView(false);
    //         });
    //         return false;
    //     }
    // }

    // if(info.zgfx14rfh == 1) {
    //     if($.trim(info.zgfx14rfhdd) === '') {
    //         wapalert('请填写离开高风险地点时间', false, function () {
    //             $("[name=zgfx14rfhdd]").focus();
    //             $("[name=zgfx14rfhdd]").get(0).scrollIntoView(false);
    //         });
    //         return false;
    //     }
    // }


    if (info.sfcyglq == 1) {
        // if(info.gllx == '') {
        //     wapalert('请选择观察场所', false, function () {
        //         $("[name=gllx]").get(0).scrollIntoView(false);
        //     });
        //     return false;
        // }

        if (info.glksrq == '') {
            wapalert('请选择观察开始时间', false, function () {
                $jquery("[name=glksrq]").get(0).scrollIntoView(false);
            });
            return false;
        }
    }


    if (info.sfcxzysx == 1 && info.qksm == '') {
        wapalert('情况说明不能为空', false, function () {
            $jquery("[name=qksm]").focus();
            $jquery("[name=qksm]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (info.sfsqhzjkk === '') {
        wapalert('请选择已经申请校区所在地健康码', false, function () {

            $jquery("[name=sfsqhzjkk]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (info.sfsqhzjkk == 1 && info.sqhzjkkys == '') {
        wapalert('请选择今日校区所在地健康码的颜色', false, function () {

            $jquery("[name=sqhzjkkys]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 1 && info.area == '' && !this.ipCtrl) {
        wapalert('未获取到地理位置', false, function () {
            $jquery("[name=area]").focus();
            $jquery("[name=area]").get(0).scrollIntoView(false);
        });
        return false;
    }
    //   if(sfzgn==1 && this.Allarea.length==0 && this.ipCtrl && (this.jtszd.myprovice=='' || this.jtszd.mycity=='')) {
    //      wapalert('请选取地理位置', false, function () {
    //          $("[name=ip]").get(0).scrollIntoView(false);
    //      });
    //      return false;
    //  }
    //   if(this.Allarea.length>0 && this.ipCtrl && (this.jtszd.myprovice=='' || this.jtszd.mycity=='' || this.jtszd.myarea=='')) {
    //      wapalert('请选取地理位置', false, function () {
    //          $("[name=ip]").get(0).scrollIntoView(false);
    //      });
    //      return false;
    //  }

    // if(sfzgn==0 && info.szgjcs.trim() == '' && !this.ipCtrl1) {
    //     wapalert('未获取到地理位置', false, function () {
    //         $("[name=szgjcs]").focus();
    //         $("[name=dwszgj]").get(0).scrollIntoView(false);
    //     });
    //     return false;
    // }

    // if(sfzgn==0 && info.szgj=='' && this.ipCtrl1){

    //     wapalert('请选择所在地区/国家', false, function () {
    //         // $("[name=szgj]").focus();
    //         $("[name=gwszgzcs]").get(0).scrollIntoView(false);
    //     });
    //     return false;
    // }
    // if(sfzgn==0 && info.gwszgzcs=='' && this.ipCtrl1){

    //     wapalert('请填写所在具体区域/国家城市', false, function () {
    //         $("[name=gwszgzcs]").focus();
    //         $("[name=gwszgzcs]").get(0).scrollIntoView(false);
    //     });
    //     return false;
    // }

    if (info.sffrqjwdg === '') {
        wapalert('请选择今日是否因发热请假未到岗', false, function () {
            $jquery("[name=sffrqjwdg]").get(0).scrollIntoView(false);
        });
        return false;
    }


    if (info.sfqtyyqjwdg === '') {
        wapalert('请选择今日是否因发热外的其他原因请假未到岗', false, function () {
            $jquery("[name=sfqtyyqjwdg]").get(0).scrollIntoView(false);
        });
        return false;
    }

    // if(info.sfhsjc === '') {
    //     wapalert('请选择是否做过核酸检测', false, function () {
    //         $("[name=sfhsjc]").get(0).scrollIntoView(false);
    //     });
    //     return false;
    // }

    // if($.isEmptyObject(info.jrdqtlqk)) {
    //     wapalert('请选择你是否从以下地区返回浙江（含经停）', false, function () {
    //         $("[name=jrdqtlqk]").get(0).scrollIntoView(false);
    //     });
    //     return false;
    // }

    if (sfzgn == 1 && info.sfymqjczrj === '') {
        wapalert('请选择本人或家庭成员(包括其他密切接触人员)是否有近14日入境的情况', false, function () {
            $jquery("[name=sfymqjczrj]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 1 && info.sfymqjczrj === '') {
        wapalert('请选择本人或家庭成员(包括其他密切接触人员)是否有近14日入境的情况', false, function () {
            $jquery("[name=sfymqjczrj]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.zjdfgj === '') {
        wapalert('请填写近14日到访过的国家/地区', false, function () {
            $jquery("[name=zjdfgj]").focus();
            $jquery("[name=zjdfgj]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.cfgj == '') {
        wapalert('请选择国家或地区', false, function () {
            $jquery("[name=cfgj]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.tjgj == '') {
        wapalert('请填写途经国家', false, function () {
            $jquery("[name=tjgj]").focus();
            $jquery("[name=tjgj]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.nrjrq == '') {
        wapalert('请选择拟入境日期', false, function () {
            $jquery("[name=nrjrq]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.rjka == '') {
        wapalert('请填写入境口岸', false, function () {
            $jquery("[name=rjka]").focus();
            $jquery("[name=rjka]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (sfzgn == 0 && info.sfyrjjh == 1 && (info.jnmddsheng == '' || info.jnmddshi == '' || info.jnmddqu == '')) {
        wapalert('请选择境内目的地', false, function () {
            $jquery("[name=jnmdd]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.jnmddxiangxi == '') {
        wapalert('请填写境内目的地详细地址', false, function () {
            $jquery("[name=jnmdd]").focus();
            $jquery("[name=jnmdd]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (sfzgn == 0 && info.sfyrjjh == 1 && info.rjjtfs == '') {
        wapalert('请选择入境交通方式', false, function () {
            $jquery("[name=rjjtfs]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.rjjtfs == 4 && info.rjjtfs1 == '') {
        wapalert('请填写其他入境交通方式', false, function () {
            $jquery("[name=rjjtfs1]").focus();
            $jquery("[name=rjjtfs]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.rjjtgjbc == '') {
        wapalert('请填写入境交通工具', false, function () {
            $jquery("[name=rjjtgjbc]").focus();
            $jquery("[name=rjjtgjbc]").get(0).scrollIntoView(false);
        });
        return false;
    }
    if (sfzgn == 0 && info.sfyrjjh == 1 && info.jnjtfs == '') {
        wapalert('请选择境内交通方式', false, function () {
            $jquery("[name=jnjtfs]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.jnjtfs == 4 && info.jnjtfs1 == '') {
        wapalert('请填写其他境内交通方式', false, function () {
            $jquery("[name=jnjtfs1]").focus();
            $jquery("[name=jnjtfs]").get(0).scrollIntoView(false);
        });
        return false;
    }

    if (sfzgn == 0 && info.sfyrjjh == 1 && info.jnjtgjbc == '') {
        wapalert('请填写境内交通工具', false, function () {
            $jquery("[name=jnjtgjbc]").focus();
            $jquery("[name=jnjtgjbc]").get(0).scrollIntoView(false);
        });
        return false;
    }


    if (info.sfqrxxss != 1) {
        wapalert('请检查填写信息是否如实，并勾选"本人承诺', false, function () {
            $jquery("[name=sfqrxxss]").get(0).scrollIntoView();
        });
        return false;
    }

    return true;
}

async function vueBrowserSave(sfzgn: number, info: HealthReportRequest): Promise<boolean> {

    try {
        // if(!_this.showFxyy){
        info.fxyy = "";
        // }
        if (info.ismoved != 1) {
            info.bztcyy == ''
        }
        if (info.sfcxtz == 0) {
            info.sfyyjc = 0;
        }
        if (info.sfyyjc == 0) {
            info.jcjgqr = 0;
            info.jcjg = '';
        }

        if (info.sfjcbh == 0) {
            info.jcbhlx = '';
            info.jcbhrq = '';
        }

        if (info.sfjcqz == 0) {
            info.jcqzrq = "";
        }

        if (info.sfcyglq == 0) {
            info.gllx = '';
            info.glksrq = '';
        }

        if (info.zgfx14rfh == 0) {
            info.zgfx14rfhdd = '';
            info.zgfx14rfhsj = '';
        }

        if (info.sfcxzysx == 0) {
            info.qksm = '';
            info.remark = "";
        }
        if (info.sfsqhzjkk === '0') {
            info.sqhzjkkys = "";
        }
        if (sfzgn == 1) {
            info.gwszgzcs = "";
            info.szgj = "";
            // info.address= '';
            // info.geo_api_info='';

            info.zjdfgj = '';
            info.sfyrjjh = 0;
            info.cfgj = '';
            info.tjgj = '';
            info.nrjrq = 0;
            info.rjka = '';
            info.jnmddsheng = '';
            info.jnmddshi = '';
            info.jnmddqu = '';
            info.jnmddxiangxi = '';
            info.rjjtfs = '';
            info.rjjtgjbc = '';
            info.jnjtfs = '';
            info.jnjtgjbc = '';

        } else {
            info.sfymqjczrj = 0;
            if (info.sfyrjjh == 0) {
                info.cfgj = '';
                info.tjgj = '';
                info.nrjrq = 0;
                info.rjka = '';
                info.jnmddsheng = '';
                info.jnmddshi = '';
                info.jnmddqu = '';
                info.jnmddxiangxi = '';
                info.rjjtfs = '';
                info.rjjtgjbc = '';
                info.jnjtfs = '';
                info.jnjtgjbc = '';
            }
        }

        await healthReportSubmit(info);
        return true;
    } catch (e) {
        console.error(e);
    }
    return false;
}

export async function vueBrowserConfirm(sfzgn: number, info: HealthReportRequest): Promise<boolean> {

    if (!vueBrowserValid(1, info)) {
        return false;
    }

    let defStr = defStrMagicOk;

    let tmpArr = [];

    // if(info.jrsfqzys == 1) {
    //     tmpArr.push('您已选择今日<font style="color:red;">确诊疑似</font>新冠肺炎（You have been diagnosed as suspected Novel coronavirus pneumonia patient today）');
    // }
    // if(info.jrsfqzfy == 1) {
    //     tmpArr.push('您已选择今日<font style="color:red;">确诊</font>新冠肺炎（You have been diagnosed as confirmed Novel coronavirus pneumonia patient today）');
    // }
    //
    // if(info.sfjcbh == 1) {
    //     tmpArr.push('您已选择今日<font style="color:red;">接触过新冠肺炎疑似感染者</font>（You have met suspected Novel coronavirus pneumonia patient today）');
    // }
    // if(info.sfjcqz == 1) {
    //     tmpArr.push('您已选择今日<font style="color:red;">接触过新冠肺炎感染者</font>（You have met confirmed Novel coronavirus pneumonia patient today）');
    // }

    if (sfzgn == 0) {
        tmpArr.push('您已选择今日<font style="color:red;">在境外</font>（You are outside Chinese Mainland today）');
    }

    if (info.sfsqhzjkk != 1) {
        tmpArr.push('您已选择<font style="color:red;">未领取健康码</font>（Your haven\'t got health code today）');
    } else {
        let map = {
            2: '红',
            3: '黄',
            4: '橙'
        };
        let emap = {
            2: 'Red',
            3: 'Yellow',
            4: 'Orange'
        };
        if ((info.sqhzjkkys as unknown as number) > 1) {
            tmpArr.push('您已选择领取的健康码为<font style="color:red;">' + map[parseInt(info.sqhzjkkys)] + '码</font>(Your health code is ' + emap[parseInt(info.sqhzjkkys)] + ' code today)');
        }
    }

    if (tmpArr.length > 0) {
        defStr = tmpArr.join('<br >');
    }

    await wapconfirm(defStr, async () => {
        await vueBrowserSave(sfzgn, info);
    });
}
