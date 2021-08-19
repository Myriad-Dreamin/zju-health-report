// ==UserScript==
// @name         Health Report
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Myriad Dreamin
// @match        https://healthreport.zju.edu.cn/ncov/wap/default/index
// @icon         https://www.google.com/s2/favicons?domain=healthreport.zju.edu.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const vmInstance = window.vm;
    vmInstance.info.sfymqjczrj = 0;
    vmInstance.info.sfqrxxss = 1;
    vmInstance.setSfzx('0');
    vmInstance.getLocation();
    const k = setInterval(() => {
        console.log(vmInstance.info.geo_api_info);
        if (vmInstance.info.geo_api_info) {
            clearInterval(k);
            vmInstance.confirm();
        }
    }, 50);
})();
