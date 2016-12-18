
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var smsExport = {};

/*
 * Methods
 */

smsExport.startWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSRead', 'startWatch', [] );
};

smsExport.stopWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSRead', 'stopWatch', [] );
};

/*
 * Events:
 *
 * document.addEventListener('onSMSArrive', function(e) { var sms = e.data; }
 *
 */

module.exports = smsExport;
