// ==UserScript==
// @name        Oglaf
// @include     http://oglaf.com/*
// @version     1.0
// @grant		none
// ==/UserScript==

var alt = document.getElementById("strip").getAttribute("alt");
var title = document.getElementById("strip").getAttribute("title");

title = title + '\nAlt: ' + alt;
document.getElementById("strip").setAttribute("title", title);