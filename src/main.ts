// https://healthreport.zju.edu.cn/
import { vueBrowserConfirm } from './browser';
import {reportConfig} from './conf';
import {infoTemplate} from './template';

const confKeys = Object.keys(reportConfig);
if (!confKeys.includes('uid')) {
    throw new Error("uid missing in config");
}
if (!confKeys.includes('address')) {
    throw new Error("address missing in config");
}
if (!confKeys.includes('geo_api_info')) {
    throw new Error("geo_api_info missing in config");
}
if (!confKeys.includes('area')) {
    throw new Error("area missing in config");
}
if (!confKeys.includes('province')) {
    throw new Error("province missing in config");
}
if (!confKeys.includes('city')) {
    throw new Error("city missing in config");
}

vueBrowserConfirm(1, {...infoTemplate, ...reportConfig}).catch(console.error);
