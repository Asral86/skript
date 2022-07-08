// ==UserScript==
// @name         xkcd
// @description  Title-text under bilden
// @author       Lars Andersson
// @version      1.0.2
// @include      https://xkcd.com/*
// @include      https://xkcd.org/*
// @include      https://www.xkcd.com/*
// @grant        none
// ==/UserScript==

var thetitle = document.querySelector('#comic img').getAttribute('title');
var thep = document.createElement('p');
thep.setAttribute('style', 'padding: 0 10px; line-height: 1.5em');
thep.textContent = thetitle;
document.getElementById('comic').appendChild(thep);