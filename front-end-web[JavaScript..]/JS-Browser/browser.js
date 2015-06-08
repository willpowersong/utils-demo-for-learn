/* 
    ie6/7/8/9/10/11
    opera/chrome/safiri/firefox
    wechat/qq
    os:windows/linux/mac/ipad/iphone/android
*/
var browser = function () {
    var ua = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        result = {
            engine: 0,
            system: 0,
            browser: 0,
            version: 0
        }, 
        systemList = {},
        ieBrowserList = {},
        engineList = {},
        i;
    // 操作系统列表
    systemList = {

        macintosh: ua.indexOf('macintosh') > -1,
        windows: ua.indexOf('windows') > -1,
        linux: ua.indexOf('linux') > -1,
        android: ua.indexOf('android') > -1,
        ipad: ua.indexOf('ipad') > -1,
        iphone: ua.indexOf('iphone') > -1
    };
    // IE浏览器列表
    ieBrowserList = {

        ie6: !window.XMLHttpRequest || engineList.quirk, // IE6不支持XHR
        ie7: ieBrowserList.ie6 && ieBrowserList.ie8,
        ie7Compat: document.documentMode == 7,
        ie8Compat: document.documentMode == 8,
        ie9: document.documentMode == 9,
        ie10: document.documentMode == 10,
        ie11: document.documentMode == 11,
        //考虑到判断ie8的方式故放到最后面解决
        ie8: !!document.documentMode
        
    };
    // 浏览器引擎列表
    engineList = {

        //ie: !-[1,], // IE中toString不会将最后一个逗号去掉
        ie: !!window.ActiveXObject || "ActiveXObject" in window,
        // 检测是否为怪异模式
        quirk: document.compatMode == 'BackCompat', 
        x5: ua.indexOf(' micromessenger/') > -1 || ua.indexOf(' qq/') > -1,        
        opera: (!!opera && opera.version || ua.indexOf(' opr/') > -1), 
        webkit: ua.indexOf('applewebkit/') > -1,
        gecko: navigator.product == "Gecko" && !engineList.webkit && !engineList.opera
    };
    // 判断为IE哪个版本
    if (engineList.ie) {
        // 尝试所有IE版本
        for(i in ieBrowserList) {
            if(ieBrowserList[i]) {
                result.engine = "ie";
                result.browser = i;
                // ie11没有msie了
                var ver = ua.match(/msie (\d+)| rv:(11.0)\) like gecko/);
                result.version = ~~(ver[1] || ver[2]) ;
                getSystem();

                return result;  
            } 
        }
    }
    // 判断是否x5
    if(engineList.x5){
        if(ua.indexOf('micromessenger') > -1){
            result.browser = 'wechat';
            result.version = ua.match('micromessenger\/([0-9.]*)')[1];
            result.engine = "x5";
            getSystem();
            return result; 
        }
        if(ua.indexOf('qq') > -1){
            result.browser = 'QQ';
            result.version = ua.match('qq\/([0-9.]*)')[1];
            result.engine = "x5";
            getSystem();
            return result;             
        }
    }
    // 判断是否为Opera
    if (engineList.opera){
        // 手机端的opera
        if(ua.indexOf('opr') > -1){
            result.browser = 'opera';
            result.version = ua.match('opr\/([0-9.]*)')[1];
            result.engine = "opera";
            getSystem();
            return result; 
        }else{
            result.engine = "opera";
            result.browser = "opera";
            result.version = ~~(opera.version());
            getSystem();
            return result;
        }
    }
    // 判断是否为Webkit
    if (engineList.webkit){
        if (ua.indexOf('safari') > -1) {
            // 有safari和chrome字段,则认为是chrome
            if (ua.indexOf('chrome') > -1) {
                result.browser = "chrome"; 
                result.version = "latest";
            // 有safari没chrome字段,则认为是safari
            } else {
                result.browser = "safari";
                result.version = ~~(ua.match(/ applewebkit\/(\d+)/)[1]);
            } 
        } else {
            result.browser = "webkit"; 
            result.version = "unknown";
        }
        result.engine = "webkit";
        getSystem();
        return result;
    }
    // 判断是否为Gecko
    if (engineList.gecko) {
        // 有firefox字段则为firefox
        if(ua.indexOf('firefox') > -1) {
            result.browser = "firefox"; 
            result.version = ua.match(/rv:(\d+)/)[1];
        } else {
            result.browser = "unknown"; 
            result.version = "unknown";
        } 
        result.engine = "gecko";
        getSystem();
        return result;
    }

    // 获取操作系统
    function getSystem() {
        var i;
        for (i in systemList) {
            if (systemList[i]) {
                result.system = i; 
            } 
        } 
    }
}();