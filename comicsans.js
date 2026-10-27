// ==UserScript==
// @name         Comic Sans Everywhere
// @namespace    http://tampermonkey.net/
// @version      2026-10-27
// @description  Comic Sans Everywhere
// @author       Gible Fog
// @match        *://*
// @match        *://*/*
// @exclude      *://www.google.com*
// @exclude      *://www.gible.net*
// @icon         https://www.gible.net/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/gible/usercss/main/comicsans.js
// @updateURL    https://raw.githubusercontent.com/gible/usercss/main/comicsans.js
// @grant        none
// ==/UserScript==

(function () {
    window.addEventListener('load', function () {
        let a=document.querySelectorAll(':root,body,'+
                                        '[class*="icon" i],[class*="icn" i],[class*="ico" i],'+
                                        '[class*="button" i],[class*="btn" i],'+
                                        '[class*="folder" i],[class*="search" i],[class*="vote" i]'),
            s=[...a].reverse().map(e=>window.getComputedStyle(e).getPropertyValue('font-family')),
            f=[...new Set(['"Comic Sans MS"'].concat(s).flatMap(e=>e.split(',').map(e=>e.trim())))],
            ff='*{font-family:'+f.join(', ')+' !important}',
            d=document.querySelector('body'),
            e=document.createElement('style');
        e.innerHTML=ff;
        d.appendChild(e);
    });
})();