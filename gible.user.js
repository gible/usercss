// ==UserScript==
// @name         Put Search in Header for Mediawiki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Moves the search form from the right sidebar to the header, allowing access when you're scrolled down the page. :)
// @author       You
// @match        https://ark.wiki.gg/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @homepageURL    https://github.com/gible/usercss
// @updateURL      https://raw.githubusercontent.com/gible/usercss/main/gible.user.js
// ==/UserScript==

(function() {
    'use strict';
    var elem = document.getElementById('p-search');
    document.getElementById('wikigg-header').insertBefore(elem,document.getElementById('p-personal')
    );
    elem.style.paddingBottom = '.5em';
})();
