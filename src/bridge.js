const { MESSAGE } = require("./enums/messages");
const { process } = require("./utils");

window.onload = () => process();

window.addEventListener('yt-navigate-start', process, true);
window.addEventListener('yt-navigate-finish', process);

if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message == MESSAGE.SHOW_BTN) {
        console.log("Show button on tab update") // new url is now in content scripts!
        process();
      }
  });