/* Version: V_06_d - 09.12. 2023 - 04:21:30 */ 
        var checkImGlobalScript = document.querySelector('#imGlobalScript') !== null;
        if (checkImGlobalScript) {
            //OK
        }else{ 
            var imGlobalScript = document.createElement('script');
            imGlobalScript.type = 'text/javascript';
            imGlobalScript.id = 'imGlobalScript';
            var imHbRandomParam = Math.floor(Math.random() * 10000) + 1;
            imGlobalScript.src = 'https://cdn.jsdelivr.net/gh/impression-media/js/imPrebidGlobalVariables.min.js?imHbRandomParam='+imHbRandomParam;
            document.getElementsByTagName('head')[0].appendChild(imGlobalScript);
        } 
            var imIpCloudflare = ''; 
            setTimeout(function(){
                (function() {
                    console.log('ip cloudflare start');
                    async function imUrlText(url) {
                      var imCloudflareX = await fetch(url);
                      var imCloudflareY = await imCloudflareX.text();
                      return imCloudflareY;
                    }

                    imUrlText('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
                      var ipCloudflareRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
                      imIpCloudflare = data.match(ipCloudflareRegex)[0];
                      console.log('imIpCloudflare^');
                      console.log(imIpCloudflare);
                    });
                })();
            }, 10);

            console.log('imIpCloudflare: '+imIpCloudflare);
//sas

sasImHbMbIsMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (sasImHbMbIsMobile.Android() || sasImHbMbIsMobile.BlackBerry() || sasImHbMbIsMobile.iOS() || sasImHbMbIsMobile.Opera() || sasImHbMbIsMobile.Windows());
    }
};



function sasRequest(aliasDivID, s0, s1, s3, s4){
    console.log('start fc sasRequest for sasXhr.responseText: '+aliasDivID);
    var sasDevice = 'web_desktop';
    if(sasImHbMbIsMobile.any()){
        sasDevice = 'web_mobile';
    }
    var s2 = sasDevice;
    var s5 = Math.floor(Math.random() * 1000000);
    var s6 = Math.floor(Math.random() * 1000000);
    var s7 =  window.innerWidth;
    var s8 = window.innerHeight;
    var s9 =  screen.width;
    var s10 = screen.height;
    var s11 = 'prebid';
    var s12 = 'CPzHq4APzHq4AAHABBENDbCgAP_AAEPAAAAAI2IBJC5kBSFCAGJgYtkQIAAGxxAAICACABAAAAAAABoAIAgAAAAwAAQABAAAABAAIEIAAABACEBAAAAAQAAAAQAAAAAQAAAAAQIAAAAAAiBACAAAAABAAAAAAABAQAAAgAAAAAIAQAAAAAEAgAAAAAAAAAAAABAAAQgAAAAAAAAAAAAAAAAAAAAAAAAAABBA1OBGABUAC4AHAAQAAyABoAEQAJgAVQAuABiADMAH4AQkAiACJAEcAKUAWIAy4B3AHeAP0Ag4BFgCSgF1ANYAbQA6gCQQE2gKkAWoAtwBkgDUwCQkAG';
    if (typeof __tcfapi === 'function') { 
        __tcfapi('getTCData', 2, function(tcdata,success) {
            console.log('retrieving TCDATA:', tcdata);
            console.log('tcdata.tcString: '+tcdata.tcString);
            s12 = tcdata.tcString; 
        });
    } 
    var s13 = 1;
    
    
    var url = 
    s0+
    s1+
    '/section='+s2+
    s3+
    s4+
    '/random='+s5+
    '/viewid='+s6+
    '/dev_display_width='+s7+
    '/dev_display_height='+s8+
    '/devwidth='+s9+
    '/devheight='+s10+
    '/keyword='+s11+
    '/consent='+s12+
    '/gdpr='+s13;
    
    console.log('sasRequest:'+url);
    //1. OK
    // https://a.iprima.cz/iprima/bserverj/ball/
    // site=IMM_Femina/
    // section=web_desktop/
    // area=leaderboard-1/
    // size=970x90,728x90/
    // random=675378/
    // viewid=872461/
    // dev_display_width=1366/
    // dev_display_height=305/
    // devwidth=1366/
    // devheight=768/
    // keyword=prebid/
    // consent=CP2QlRgP2QlRgAcABBENAdEsAP_gAEPgAChQg1NX_D5ebWtj8XJVIftkaYwP55izomQxBhaIEe4FwAOG7BgGB2EwNAW4JiACGBAEkiIBAQFlHBBUARAAAIgRiSCMYkGMhTNKJKBAgFMRI0NYCBxmmIFDWQCY50ouM3fxmDeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACADB-uft87_XU-9_cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQaoOYACIAFAAXAA4ADwAKgAXAA4AB4AEAAJAAXwAxADKAGgAagA8AB-AEQAJgAUIApACmAFWALgAugBiADQAG8APwAhIBEAESAI4ASwAmgBSgDAAGGAMsAZoA2QByAD4gH2AfsA_wEAAIOARGAiwCMAEagI4AjoBIgCSgE7AJ-AVAAuYBeQC-gGKAM-AaIA14BtADcAHSAO2AfYA_4CJgEXgI9ASIAlQBKwCYoEyATKAmcBOwCh4FIAUiApMBTYCpAFVAKsAV3AsQCxQFlALRAWwAt0BcgC6AF2gLvgXkBeYC-gGCQSQBJSCTAJMgSjglQCVIEsIJZglpBLcEuIJdAl2BL6CYAJggTDAmKBMcCZMEzATOAmkBNQCbEE2wTcgm8Cb4E4QgoBBqABCQAQF5gAAA.f_wACHwAAAAA/
    // gdpr=1
    
    sasUnitCustomIDsAds[aliasDivID] = 'Default for: '+aliasDivID+' :: empty-ads ';
    console.log('Default for: sasUnitCustomIDsAds^');
    console.log(sasUnitCustomIDsAds);

    var sasXhr = new XMLHttpRequest();
    var sasAsync = false;
    sasXhr.open('GET', url, sasAsync);
    //sasXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    

    if(sasAsync){
        sasXhr.onreadystatechange = function(){
          // In local files, status is 0 upon success in Mozilla Firefox
          if(sasXhr.readyState === XMLHttpRequest.DONE) {
            var status = sasXhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
              // The request has been completed successfully
              console.log('async sasXhr.responseText^');          
              console.log(sasXhr.responseText);
              //if empty-ads... 
    //          var sasDoubleQuoteString = JSON.parse(sasXhr.responseText);
    //          console.log('sasDoubleQuoteString: '+sasDoubleQuoteString);
    //          var sasString = sasDoubleQuoteString.toString();
    //          console.log('sasString: '+sasString);
    //          sasUnitCustomIDsAds[aliasDivID] = sasString.replaceAll('\"','"');
              sasUnitCustomIDsAds[aliasDivID] = sasXhr.responseText;
              console.log(sasUnitCustomIDsAds);
            } else {
                console.log('error in sasXhr');
              // Oh no! There has been an error with the request!
            }
          }
        };
        sasXhr.send();
    }else{
        sasXhr.send();
        console.log('no async sasXhr.responseText^');          
        console.log(sasXhr.responseText);
        sasUnitCustomIDsAds[aliasDivID] = sasXhr.responseText;
        console.log(sasUnitCustomIDsAds)
    }


    sasXhr.onload = function () {
        if(sasXhr.status === 201) {
            console.log('sasXhr.status: 201 - Post successfully created!'); 
        }else{
            console.log('sasXhr.status: '+sasXhr.status); 
        }
    }

}

var sasSite = { 
    "adformDesktopStrip-1": "IMM_Femina",
};var sasArea = { 
    "adformDesktopStrip-1": "leaderboard-1",
};var sasSize = { 
    "adformDesktopStrip-1": "970x210,960x200,960x210,970x90,728x90",
};var sasCPM = { 
    "adformDesktopStrip-1": "100",
};var sasUnitCustomIDsAds = [];
    sasUnitCustomIDsAds["adformDesktopStrip-1"] = "undefined";
var sasUnitCustomIDs = []; 
sasUnitCustomIDs["adformDesktopStrip"] = 1;
sasRequest('adformDesktopStrip-1','https://a.iprima.cz/iprima/bserverj/ball', '/site=IMM_Femina', '/area=leaderboard-1', '/size=970x210,960x200,960x210,970x90,728x90');


            
pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var imHbWonBids = imHbWonBids || [];
var imHbAsocPlacementMidEnable = imHbAsocPlacementMidEnable || [];
var imHbPlacementEnable = imHbPlacementEnable || [];

            function imGetCookie(name) {var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); return v ? v[2] : null;}; function imSetCookie(name,value,days){var d=new Date;d.setTime(d.getTime()+24*60*60*1000*days);document.cookie=name+'='+value+';domain=.;path=/;expires='+d.toGMTString();};function imTestingParam(t){var n=null,e=[];return location.search.substr(1).split('&').forEach(function(o){(e=o.split('='))[0]===t&&(n=decodeURIComponent(e[1]))}),n};var imtesting = imTestingParam('imtesting');if(imtesting=='start'){imSetCookie('imtesting','dev',1);}if(imtesting=='stop'){imSetCookie('imtesting', '', -1);}function imRemoveTestInfo(){document.getElementById('imtestingInfo').remove();}function imHbUploadConfig(){if(imGetCookie('imtesting')){document.getElementById('imtestingInfo')&&document.getElementById('imtestingInfo').remove();var infoImTesting=document.createElement('div');infoImTesting.id='imtestingInfo',infoImTesting.innerHTML='<a href="https://hb.impressionmedia.cz/administrace/pages/weby.php?openId=0" style="text-derocation:none; color:white;">TESTING MODE</a><span onclick="imRemoveTestInfo();" style="cursor: pointer;border: 1px solid white;border-radius: 20px 2px 2px;padding: 4px 6px 1px 10px;position: absolute; bottom: 2px;right: 2px;">X</span>',infoImTesting.style.cssText="font-size:12px;line-height:18px;z-index:999999;position:fixed;bottom:3px;right:3px;margin-top:-30px;padding:65px 15px 50px 45px;background:#0000003d;color:white;border-radius:3px;border-top-left-radius:200px;border:1px solid white;box-shadow:1px 1px 1px black;",document.body.appendChild(infoImTesting);;var imConfigId = '0'; var imConfigName = 'HBsetup_'}else{var imConfigId = '1712'; var imConfigName = 'HBsetup_ireferatycz_ireferaty_cz___SAS_testing__od_22_11_2_23__2023_12_09_0421'};var imHbScript = document.createElement('script');imHbScript.type = 'text/javascript';imHbScript.id = 'imHbConfig';var imHbRandomParam = Math.floor(Math.random() * 10000) + 1;imHbScript.src = 'https://cdn.jsdelivr.net/gh/impression-media-backup1/js/tmp/js/'+imConfigId+'/'+imConfigName+'.min.js?imHbRandomParam='+imHbRandomParam;document.getElementsByTagName('head')[0].appendChild(imHbScript);}setTimeout(function(){imHbUploadConfig();}, 20000);
    var selection = document.body.getAttribute('data-hbmasterscript') !== null;
    if (selection) {       
        hbmasterscript = document.body.getAttribute('data-hbmasterscript'); 
        var hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10);
        imHbReloadingAds = (-1 - hbMasterDigit); 
    }else{
        imHbReloadingAds = -1;  
    }
    //console.log('master imHbReloadingAds:'+imHbReloadingAds);;        
    