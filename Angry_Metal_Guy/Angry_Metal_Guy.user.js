// ==UserScript==
// @name        Angry Metal Guy
// @include     http://www.angrymetalguy.com/*
// @version     1.1.2
// @grant       none
// ==/UserScript==

function createElement(type, attributes) { // Från http://wiki.greasespot.net/Create_DOM_Structure
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

// Sharing is caring
var pappa = document.querySelector('div.sharedaddy');
var sharebar = document.getElementById('sharebar');
var flattr = document.querySelector('.wp-flattr-button');
pappa.parentNode.removeChild(pappa);
sharebar.parentNode.removeChild(sharebar);
flattr.parentNode.removeChild(flattr);

// CSS för fotnoter
var stajl = createElement('style', { type: 'text/css' });
stajl.textContent = "sup.footnote { position: relative; display: inline-block; } "+
"sup.footnote .fn-tooltip { visibility: hidden; width: 250px; padding: 8px; border-radius: 6px; position: absolute; bottom: 100%; left: 50%; margin: 0 0 5px -125px; background: black; color: #fff; text-align: left; list-style-type: none; } "+
"sup.footnote:hover .fn-tooltip { visibility: visible; } "+
".fn-tooltip span.footnotereverse { display: none; }"+
".fn-tooltip a { color: lightblue; }";
document.body.appendChild(stajl);

// Tooltips för fotnoter!
var fotnoter = document.querySelectorAll('sup.footnote a');
for (var i=0; i<=fotnoter.length-1; i++) {
	var href = fotnoter[i].getAttribute('href');
	var fnorig = document.querySelector(href);
	var tooltip = fnorig.cloneNode(true);
	tooltip.removeAttribute('id');
	tooltip.setAttribute('class', 'fn-tooltip');
	fotnoter[i].parentNode.appendChild(tooltip);
}
