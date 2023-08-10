/* Version: V_07_c - 10.08. 2023 - 20:05:52 */
/* installedModules: adform,appnexus,criteo,pubmatic,rubicon,stroeerCore,teads,consentManagementGDPR,pubCommonIdSystem,criteoIdSystem,schain,sharedIdSystem,teadsIdSystem*/
var startR2b2ScriptCyklus = 1;var selection = document.body.getAttribute('data-hbmasterscript') !== null;if(selection){console.log('start r2b2ScriptCyklus cyklus: '+startR2b2ScriptCyklus);var stringHbmasterscript = document.body.getAttribute('data-hbmasterscript');var imHbAuctionRefreshIndex = parseInt(stringHbmasterscript.replace('hb-', ''),10);if(startR2b2ScriptCyklus == imHbAuctionRefreshIndex){console.log('startR2b2ScriptCyklus == imHbAuctionRefreshIndex :: '+startR2b2ScriptCyklus+'=='+imHbAuctionRefreshIndex);var imHbNewR2b2script = document.createElement('script');imHbNewR2b2script.type = 'text/javascript';imHbNewR2b2script.id = 'imHbR2b2script'; imHbNewR2b2script.src = '//trackad.cz/hb/im/ireferaty.cz';document.getElementsByTagName('head')[0].appendChild(imHbNewR2b2script);console.log('imHbR2b2script appended');}else{console.log(' >0 Start:: R2B2 PrebidAdapter refresh');if(typeof AdTrack.PrebidAdapter.refresh === 'function'){AdTrack.PrebidAdapter.refresh(true, 0);console.log(' >0 End:: R2B2 PrebidAdapter refresh');}else{console.log('typeof AdTrack.PrebidAdapter.refresh != \'function\'');}}}else{console.log('Waiting:: R2B2 PrebidAdapter is not in first cycle');}

      

pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var imHbWonBids = imHbWonBids || [];
var imHbAsocPlacementMidEnable = imHbAsocPlacementMidEnable || [];
var imHbPlacementEnable = imHbPlacementEnable || [];

            function imGetCookie(name) {var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); return v ? v[2] : null;}; function imSetCookie(name,value,days){var d=new Date;d.setTime(d.getTime()+24*60*60*1000*days);document.cookie=name+'='+value+';domain=.;path=/;expires='+d.toGMTString();};function imTestingParam(t){var n=null,e=[];return location.search.substr(1).split('&').forEach(function(o){(e=o.split('='))[0]===t&&(n=decodeURIComponent(e[1]))}),n};var imtesting = imTestingParam('imtesting');if(imtesting=='start'){imSetCookie('imtesting','dev',1);}if(imtesting=='stop'){imSetCookie('imtesting', '', -1);}function imRemoveTestInfo(){document.getElementById('imtestingInfo').remove();}function imHbUploadConfig(){if(imGetCookie('imtesting')){document.getElementById('imtestingInfo')&&document.getElementById('imtestingInfo').remove();var infoImTesting=document.createElement('div');infoImTesting.id='imtestingInfo',infoImTesting.innerHTML='<a href="https://hb.impressionmedia.cz/administrace/pages/weby.php?openId=0" style="text-derocation:none; color:white;">TESTING MODE</a><span onclick="imRemoveTestInfo();" style="cursor: pointer;border: 1px solid white;border-radius: 20px 2px 2px;padding: 4px 6px 1px 10px;position: absolute; bottom: 2px;right: 2px;">X</span>',infoImTesting.style.cssText="font-size:12px;line-height:18px;z-index:999999;position:fixed;bottom:3px;right:3px;margin-top:-30px;padding:65px 15px 50px 45px;background:#0000003d;color:white;border-radius:3px;border-top-left-radius:200px;border:1px solid white;box-shadow:1px 1px 1px black;",document.body.appendChild(infoImTesting);;var imConfigId = '0'; var imConfigName = 'HBsetup_'}else{var imConfigId = '1659'; var imConfigName = 'HBsetup_ireferatycz_ireferaty_cz___DEV_clon_1645___teads_ID_2023_08_10_2005'};var imHbScript = document.createElement('script');imHbScript.type = 'text/javascript';imHbScript.id = 'imHbConfig';var imHbRandomParam = Math.floor(Math.random() * 10000) + 1;imHbScript.src = 'https://cdn.jsdelivr.net/gh/impression-media-backup1/js/tmp/js/'+imConfigId+'/'+imConfigName+'.min.js?imHbRandomParam='+imHbRandomParam;document.getElementsByTagName('head')[0].appendChild(imHbScript);}
    //posledni cyklus nepromazavat    
    var selection = document.body.getAttribute('data-hbmasterscript') !== null;
    if (selection) {       
        hbmasterscript = document.body.getAttribute('data-hbmasterscript'); 
        var hbLastMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10);
        var hbLastCycle = (0 - (hbLastMasterDigit + 1)); 
    }else{
        var hbLastCycle = 0;  
    }
    console.log('hbLastCycle: '+hbLastCycle);
    if(hbLastCycle <= 0){
        //OK uz nic nemaz, uz dalsi klasicky reloading neprijde
        console.log('OK uz nic nemaz, uz dalsi klasicky reloading neprijde');
    }else{
        setTimeout(function(){
            console.log('imHbPlacementEnable^^');
            console.log(imHbPlacementEnable);

            console.log('imHbAsocPlacementMidEnable^^');
            console.log(imHbAsocPlacementMidEnable);

            for (var key in imHbAsocPlacementMidEnable) {
                console.log('imHbAsocPlacementMidEnable key: '+ key);
                console.log(imHbAsocPlacementMidEnable[key]);
                  var resetMid = imHbAsocPlacementMidEnable[key];
                  if(imHbPlacementEnable.includes(key)){
                  
                        console.log('resetTargeting resetMid: '+resetMid);
                        adformtag.resetTargeting(resetMid);
                        
                  }    
            }
            pbjs = {};
            pbjs.que = [];
            document.body.setAttribute('im-pr', '0');
            document.body.setAttribute('data-posRel', 'Active: ');
            document.body.setAttribute('s-pr', 'start');

        }, (50000000 - 10000));

    }

    document.currentScript.setAttribute('id', 'imHbMaster');
    var selection = document.body.getAttribute('data-hbmasterscript') !== null;
    if (selection) {
//        setTimeout(function(){
//            console.log('fire imHbReloading()');            
//            imHbReloading(); 
//        }, 50000000);
    }else{
        //pridej obsluhu pro reloading    
        imHbReloadingAds = 0; 
        var imHbBodyscript = document.createElement('script');
        imHbBodyscript.type = 'text/javascript';
        imHbBodyscript.id = 'imHbReloadingFunction';
        imHbBodyscript.innerHTML = "function onePlusimHbReloading(){ setTimeout(function(){ console.log('onePlusimHbReloading timeout >> fire imHbReloading()');  imHbReloading(); }, 50000000); }  function imHbReloading() {  console.log('start >> fire imHbReloading()');  var selection = document.body.getAttribute('data-hbmasterscript') !== null; if (selection) { var hbmasterscript = document.body.getAttribute('data-hbmasterscript'); var hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10); hbMasterDigit = (hbMasterDigit+1); document.body.setAttribute('data-hbmasterscript', 'hb-'+hbMasterDigit); hbmasterscript = document.body.getAttribute('data-hbmasterscript'); console.log('imHbReloading() >> hbmasterscript^^'); console.log(hbmasterscript); hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10); console.log('imHbReloading() >> hbMasterDigit: '+hbMasterDigit+' fetch_reloadingAds: 0'); if(hbMasterDigit >= 0){ console.log('Reloading - end'); }else{ console.log('Reloading - new cycle'); includeImHbReloading(document.body.getAttribute('data-hbmasterscript')); onePlusimHbReloading();} }else{ console.log('imHbReloading() >> first cycle >> fetch_reloadingAds: 0'); document.body.setAttribute('data-hbmasterscript', 'hb-1'); includeImHbReloading('hb-1'); onePlusimHbReloading(); } } function includeImHbReloading(hb){var imHbReloadingRandomParam = Math.floor(Math.random() * 10000) + 1;var imHbConfig = document.getElementById('imHbConfig');var srcImHbConfig = imHbConfig.src;imHbConfig.parentNode.removeChild(imHbConfig);var imHbMaster = document.getElementById('imHbMaster');var srcImHbMaster = imHbMaster.src;imHbMaster.parentNode.removeChild(imHbMaster);setTimeout(function(){var imHbMasterScript = document.createElement('script');imHbMasterScript.type = 'text/javascript';imHbMasterScript.id = 'imHbMaster';if(srcImHbMaster.includes('?')){imHbMasterScript.src = srcImHbMaster+'&imHbReloading-'+hb+'='+imHbReloadingRandomParam;}else{imHbMasterScript.src = srcImHbMaster+'?imHbReloading-'+hb+'='+imHbReloadingRandomParam;}document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);}, 2000);setTimeout(function(){var imHbScript = document.createElement('script'); imHbScript.type = 'text/javascript'; imHbScript.id = 'imHbConfig';imHbScript.src = srcImHbConfig+'&imHbReloading-'+hb+'='+imHbReloadingRandomParam; document.getElementsByTagName('head')[0].appendChild(imHbScript); }, 4000);}";
        document.body.appendChild(imHbBodyscript);
        
        //prvni nacteni configu
        setTimeout(function(){
            imHbUploadConfig();
        
        }, 10);

        //vse smaz a pust novy uploud HB ovladacu 
//        setTimeout(function(){
            console.log('first timeout >> fire onePlusimHbReloading()');  
            onePlusimHbReloading();
//            imHbReloading(); 
//        }, 50000000);
    }
        
    
    var selection = document.body.getAttribute('data-hbmasterscript') !== null;
    if (selection) {       
        hbmasterscript = document.body.getAttribute('data-hbmasterscript'); 
        var hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10);
        imHbReloadingAds = (0 - hbMasterDigit); 
    }else{
        imHbReloadingAds = 0;  
    }
    console.log('master imHbReloadingAds:'+imHbReloadingAds);;        
    