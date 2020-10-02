const { MESSAGE } = require("./enums/messages");
const { TAB_STATUS } = require("./enums/status");
const { process } = require("./utils");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if (changeInfo.status == TAB_STATUS.COMPLETE){
        console.log("Current Tab:", changeInfo.url);
        chrome.tabs.sendMessage( tabId, {
            message: MESSAGE.SHOW_BTN,
            url: changeInfo.url
          })
    }
    process();
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Smash This Button Installed!!");
    window.location.href = "http://smashthisbutton.com/";
});