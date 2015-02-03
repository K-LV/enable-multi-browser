/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets: true*/

define(function (require, exports, module) {
"use strict";
	

	var PreferencesManager  	= brackets.getModule("preferences/PreferencesManager"),
	    AppInit             	= brackets.getModule("utils/AppInit");

	var prefs = PreferencesManager.getExtensionPrefs("livedev");
	
	function init(){
		console.log("enable-multi-browser");

		console.log(prefs.get("multibrowser"));

		if(!prefs.get("multibrowser")){
			prefs.set("multibrowser", true);
			console.log(prefs.get("multibrowser"));
		}
	}

	AppInit.appReady(function(){
        init();
    });

});