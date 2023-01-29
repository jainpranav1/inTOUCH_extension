chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({}, function (tabs) {
        let message = { action: "toggle" };
        for (var i = 0; i < tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message);
        }
    });
});