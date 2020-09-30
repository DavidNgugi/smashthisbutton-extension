const { process } = require("./utils");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if (changeInfo.url){
        console.log("Current Tab:", changeInfo.url);
        chrome.tabs.sendMessage( tabId, {
            message: 'show-button',
            url: changeInfo.url
          })
    }
    process();
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Smash This Button Installed!!");
    window.location.href = "http://smashthisbutton.com/";
});