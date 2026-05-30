// ==UserScript==
// @name         SVT dark mode
// @author       Lars Andersson
// @version      1.0.1
// @match        https://www.svt.se/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

let html = document.documentElement;
let body = document.body;

if (html.hasAttribute("data-theme")) {
	// window.alert("<html> data-theme: " +  html.getAttribute("data-theme"));
}
else if (body.hasAttribute("data-theme")) {
	// window.alert("<body> data-theme: " +  body.getAttribute("data-theme"));
}
else { html.setAttribute("data-theme","dark"); }