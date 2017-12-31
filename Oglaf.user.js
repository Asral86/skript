// ==UserScript==
// @name         Oglaf
// @description  Alt-text i title-text
// @author       Lars Andersson
// @version      1.0
// @include      http://oglaf.com/*
// @grant        none
// ==/UserScript==

var alt = document.getElementById("strip").getAttribute("alt");
var title = document.getElementById("strip").getAttribute("title");
title = title + '\nAlt: ' + alt;
document.getElementById("strip").setAttribute("title", title);