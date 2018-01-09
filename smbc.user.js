// ==UserScript==
// @name         SMBC
// @description  Title-text under bilden
// @author       Lars Andersson
// @version      1.0
// @include      https://www.smbc-comics.com/*
// @include      https://smbc-comics.com/*
// @grant        none
// ==/UserScript==

var thetitle = document.querySelector('#cc-comic').getAttribute('title');
var thep = document.createElement('p');
thep.textContent = thetitle;
document.getElementById('cc-comicbody').appendChild(thep);