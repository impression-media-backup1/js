/* Version: V_06_c - 01.03. 2023 - 22:24:52 */
/* installedModules: adform,appnexus,criteo,pubmatic,rtbhouse,rubicon,stroeerCore,teads,ix,consentManagementGDPR,pubCommonIdSystem,criteoIdSystem,schain,sharedIdSystem*/
var selection = document.body.getAttribute('data-hbmasterscript') !== null;if(selection){console.log(' 0 Start:: R2B2 PrebidAdapter refresh');if(typeof AdTrack.PrebidAdapter.refresh === 'function'){AdTrack.PrebidAdapter.refresh(true, 0);console.log(' 0 End:: R2B2 PrebidAdapter refresh');}}else{console.log('start r2b2ScriptCyklus cyklus: 0');var imHbNewR2b2script = document.createElement('script');imHbNewR2b2script.type = 'text/javascript';imHbNewR2b2script.id = 'imHbR2b2script'; imHbNewR2b2script.src = '//trackad.cz/hb/im/in-pocasi.cz';document.getElementsByTagName('head')[0].appendChild(imHbNewR2b2script);console.log('imHbR2b2script appended');}
pbjs.processQueue();
            
pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var imHbWonBids = imHbWonBids || [];
var imHbAsocPlacementMidEnable = imHbAsocPlacementMidEnable || [];
var imHbPlacementEnable = imHbPlacementEnable || [];

            function imGetCookie(name) {var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); return v ? v[2] : null;}; function imSetCookie(name,value,days){var d=new Date;d.setTime(d.getTime()+24*60*60*1000*days);document.cookie=name+'='+value+';domain=.;path=/;expires='+d.toGMTString();};function imTestingParam(t){var n=null,e=[];return location.search.substr(1).split('&').forEach(function(o){(e=o.split('='))[0]===t&&(n=decodeURIComponent(e[1]))}),n};var imtesting = imTestingParam('imtesting');if(imtesting=='start'){imSetCookie('imtesting','dev',1);}if(imtesting=='stop'){imSetCookie('imtesting', '', -1);}function imRemoveTestInfo(){document.getElementById('imtestingInfo').remove();}function imHbUploadConfig(){if(imGetCookie('imtesting')){document.getElementById('imtestingInfo')&&document.getElementById('imtestingInfo').remove();var infoImTesting=document.createElement('div');infoImTesting.id='imtestingInfo',infoImTesting.innerHTML='<a href="https://hb.impressionmedia.cz/administrace/pages/weby.php?openId=0" style="text-derocation:none; color:white;">TESTING MODE</a><span onclick="imRemoveTestInfo();" style="cursor: pointer;border: 1px solid white;border-radius: 20px 2px 2px;padding: 4px 6px 1px 10px;position: absolute; bottom: 2px;right: 2px;">X</span>',infoImTesting.style.cssText="font-size:12px;line-height:18px;z-index:999999;position:fixed;bottom:3px;right:3px;margin-top:-30px;padding:65px 15px 50px 45px;background:#0000003d;color:white;border-radius:3px;border-top-left-radius:200px;border:1px solid white;box-shadow:1px 1px 1px black;",document.body.appendChild(infoImTesting);;var imConfigId = '0'; var imConfigName = 'HBsetup_'}else{var imConfigId = '1568'; var imConfigName = 'HBsetup_wwwin-pocasicz_in_pocasi_cz_clon_15_8___gdpr_test_na_7_dni___V_6c_PC_branding_with_double_observe___od_2_3_2_23__2023_03_01_2224'};var imHbScript = document.createElement('script');imHbScript.type = 'text/javascript';imHbScript.id = 'imHbConfig';var imHbRandomParam = Math.floor(Math.random() * 10000) + 1;imHbScript.src = 'https://cdn.jsdelivr.net/gh/impression-media-backup1/js/tmp/js/'+imConfigId+'/'+imConfigName+'.min.js?imHbRandomParam='+imHbRandomParam;document.getElementsByTagName('head')[0].appendChild(imHbScript);}setTimeout(function(){imHbUploadConfig();}, 10);
    var selection = document.body.getAttribute('data-hbmasterscript') !== null;
    if (selection) {       
        hbmasterscript = document.body.getAttribute('data-hbmasterscript'); 
        var hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10);
        imHbReloadingAds = (-1 - hbMasterDigit); 
    }else{
        imHbReloadingAds = -1;  
    }
    console.log('master imHbReloadingAds:'+imHbReloadingAds);;        
    