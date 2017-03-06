function notifyOnMessage(message, event, responseFunc) {

  console.log("background script received message");
  console.log(message);
  console.log(event);

  setTimeout(function () {
    responseFunc("notifyOnMessage");
  }, 5000);

  return true;

}

try {
  browser.runtime.onMessage.addListener(notifyOnMessage);
} catch (Exception) {
  chrome.runtime.onMessage.addListener(notifyOnMessage);
}