// ==UserScript==
// @name            Auto Open Extensions Settings
// @description     自动打开拓展设置
// @updateURL       https://raw.githubusercontent.com/saltplay/Auto-Open-Extensions-Settings/master/dist/auto-open-extensions-settings.user.js
// @downloadURL     https://raw.githubusercontent.com/saltplay/Auto-Open-Extensions-Settings/master/dist/auto-open-extensions-settings.user.js
// @version         1.4
// @author          saltplay
// @namespace       https://github.com/SillyTavern/SillyTavern
// @match           *://127.0.0.1:8000/*
// ==/UserScript==

(function () {
    // 等待10秒后执行
    setTimeout(function () {
        console.log(
            "10 seconds passed, attempting to open extensions drawer..."
        );

        // 尝试找到并点击按钮
        const drawerButton = document.querySelector(
            "#extensions-settings-button .drawer-toggle"
        );
        if (drawerButton) {
            const event = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            });
            drawerButton.dispatchEvent(event);
            console.log("Extensions drawer opened automatically");
        } else {
            console.log("Extensions drawer button not found");
        }
    }, 10000); // 10秒延迟
})();
