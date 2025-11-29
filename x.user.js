// ==UserScript==
// @name         xcancel
// @description  x.com -> xcancel.com
// @author       Lars Andersson
// @version      1.0
// @include      https://x.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

var url = document.URL;
let lnk = document.createElement('a');
lnk.href = url.replace('x.com','xcancel.com');
lnk.textContent = "→ xcancel.com";
lnk.style = "position: fixed; top: 0.2em; left: 1em; background-color: black; color: #eee; font-size: 3em; border: 5px solid darkred; padding: 0.2em; text-decoration: none;"
document.body.appendChild(lnk);