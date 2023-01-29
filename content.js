let exten_on = false;
let iframe_el = document.createElement("iframe");
iframe_el.id = "my_iframe";
iframe_el.src = chrome.runtime.getURL("popup.html");
iframe_el.style.position = "fixed";
iframe_el.style.top = "10px";
iframe_el.style.right = "10px";
iframe_el.style.width = "220px";
iframe_el.style.height = "430px";
iframe_el.style.border = "none";
iframe_el.style.zIndex = 2147483647;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "toggle") {
        if (exten_on) {
            exten_on = false;
            const iframe_elem = document.getElementById("my_iframe");
            iframe_elem.remove();
        } else {
            exten_on = true;
            document.body.appendChild(iframe_el);
        }

    }
})