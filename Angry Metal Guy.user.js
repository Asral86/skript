// ==UserScript==
// @name         Angry Metal Guy
// @description  Gör fotnoter till tooltips
// @author       Lars Andersson
// @version      1.2.2
// @include      https://www.angrymetalguy.com/*
// @include      http://www.angrymetalguy.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function createElement(type, attributes) {
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

// CSS för fotnoter ligger i Stylus/separat fil!

// Skapa tooltips för fotnoter
var fotnoter = document.querySelectorAll('sup.footnote a');
for (var i=0; i<=fotnoter.length-1; i++) {
	var href = fotnoter[i].getAttribute('href');
	var fnorig = document.querySelector(href);
	var tooltip = fnorig.cloneNode(true);
	tooltip.removeAttribute('id');
	tooltip.setAttribute('class', 'fn-tooltip');
	fotnoter[i].parentNode.appendChild(tooltip);
}
