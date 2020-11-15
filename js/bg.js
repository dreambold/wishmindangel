chrome.browserAction.onClicked.addListener(function() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { command: "test" }, function(response2) {});
    });


})

chrome.extension.onMessage.addListener(function(msg, sender, reply) {

    switch (msg.cmd) {
        case 'save':
            {
                var url = 'https://wishmindangel.web.app/additem?product_url=' + msg.data["product_url"] + '&image_url=' + msg.data["image_url"] + '&description=' + msg.data["description"]
                chrome.windows.create({
                    url: url,
                    type: "popup"
                });
            }
            break;
    }


})