const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStop.setAttribute("disabled","disabled"),t.btnStart.addEventListener("click",(function(){timerId=setInterval(e,1e3),t.btnStart.setAttribute("disabled","disabled"),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){clearInterval(timerId),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","disabled")})),console.log("!!!");
//# sourceMappingURL=01-color-switcher.728be45a.js.map
