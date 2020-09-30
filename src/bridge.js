const { process } = require("./utils");

window.onload = () => process();

window.addEventListener('yt-navigate-start', process);
window.addEventListener('yt-navigate-finish', process);

if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'show-button') {
        console.log("SHow button on tab update") // new url is now in content scripts!
        process();
      }
  });