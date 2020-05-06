// ==UserScript==
// @name         Angry Metal Guy
// @description  Gör fotnoter till tooltips, och fixa prev/next
// @author       Lars Andersson
// @version      1.3
// @include      https://www.angrymetalguy.com/*
// @include      http://www.angrymetalguy.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

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

// Kopiera previous/next-nav till toppen
var pn = document.querySelector('div.entry-next-prev-desktop').cloneNode(true);
var mp = document.querySelector('.site-main > article.post');
mp.insertAdjacentElement('afterbegin',pn);