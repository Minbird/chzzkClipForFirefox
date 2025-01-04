// ==UserScript==
// @name         Chzzk Clip for Firefox
// @namespace    http://tampermonkey.net/
// @version      2025-01-04
// @description  Override the user agent to Edge. (For now)
// @author       Minbird
// @run-at       document-start
// @match        https://chzzk.naver.com/clip-editor*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    let tagetAgent = "Edge"
    let agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"

    // TODO - 에이전트 타켓 변경 기능 추가해보면 어떨까
    const EDGE_AGNET = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    //const CHROME_AGNET = ""

    Object.defineProperty(navigator, 'userAgent', {
        value: agent
    });

})();