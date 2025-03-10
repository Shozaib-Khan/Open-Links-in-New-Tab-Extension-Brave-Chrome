chrome.runtime.onMessage.addListener((message) => {
    if (message.url) {
      chrome.tabs.create({ url: message.url });
    }
  });
  