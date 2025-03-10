document.addEventListener("click", (event) => {
    let link = event.target.closest("a");
    if (link && link.href) {
      event.preventDefault();
      chrome.runtime.sendMessage({ url: link.href });
    }
  });
  