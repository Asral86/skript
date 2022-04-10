// ==UserScript==
// @name         Oglaf
// @description  Title och alt under bilden
// @author       Lars Andersson
// @version      1.1
// @include      https://www.oglaf.com/*
// @grant        none
// ==/UserScript==

var comic = document.getElementById("strip");
var alt = comic.getAttribute("alt");
var title = comic.getAttribute("title");
var thep = document.createElement('p');
thep.textContent = title+"\nAlt: "+alt;
thep.style = "background-color: #ccc;margin: 0;padding: 8px 16px; white-space: pre-line;";
document.querySelector('div.content').insertAdjacentElement('afterend', thep);