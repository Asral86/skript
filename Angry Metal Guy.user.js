// ==UserScript==
// @name         Angry Metal Guy
// @description  Gör fotnoter till tooltips, och fixa prev/next
// @version      1.5
// @author       Lars Andersson
// @namespace    https://github.com/Asral86/skript
// @match        *://www.angrymetalguy.com/*
// @grant        none
// ==/UserScript==

// Fixa favicon
var ico = document.createElement('link');
ico.setAttribute('rel', 'icon');
ico.href = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAACkpKQEnJycLFhYWNwsLC3kBAQGqAAAAvgAAALwBAQGqCAgIdA8PDyoMDAwCAAAAAAAAAAAAAAAAODg4ADw8PAArKysPFxcXXwoKCroBAQHkAAAA7gAAAPIAAADyAAAA7gEBAeMGBgajDQ0NPBQUFAAAAAAAEhISAEJCQgBISEgKGBgYXgoKCsMCAgL4AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AQEB8AUFBZYVFRUhBQUFABcXFwAeHh4DHx8fRwwMDLcDAwP2AAAA/wEBAfgDAwPmBAQE5QAAAP4AAAD/AAAA/wAAAP8CAgLMCgoKVAUFBQIHBwcAEBAQBREREYEEBAToAAAA/wAAAP4DAwPnCgoKwAgICMoEBATdBQUFwAMDA9EBAQHzAQEB4AICAnYCAgIFAgICAAwMDAQMDAxrBgYGygICAvQAAAD9AwMD6AkJCccQEBDGGBgYoxoaGmgMDAx9AgICzwAAAOQCAgKAAAAABgAAAAA7OzsBPT09GRsbG2sJCQnAAgIC6wICAvUHBwfuICAguT8/P2YuLi5QGRkZTwMDA6wDAwPgCQkJgwgICAYICAgAODg4AD09PQIlJSU2EhISfA0NDacQEBC/FRUVxjY2Nns6OjosKysrORwcHEwEBASsBgYG4RISEoUxMTEGKCgoADo6OgBCQkIHHBwcag4ODrkPDw+mFxcXlw0NDdQWFha4GBgYpxMTE8gPDw+YBAQEuQYGBuYODg6YSEhIDD09PQFKSkoAVVVVCB0dHXsJCQngCQkJwhkZGZcPDw/TFhYWsBwcHJUICAjYFBQUig8PD6MFBQXvBwcHuUBAQCU8PDwBREREAUtLSw0ZGRmHCAgI7AoKCrctLS1KFBQURBwcHDkhISErDQ0NRxYWFicRERF4BgYG6QUFBc4tLS1EKysrA0JCQgFGRkYZFBQUmAcHB/MJCQmlV1dXGgAAAAAAAAAAAwMDAAAAAAAVFRUAFBQUXAgICNcGBgbZISEhXiAgIARAQEABREREJREREagGBgb6CAgInltbWxBKSkoAPz8/AERERABPT08AAAAAABYWFlAJCQnKBAQE5xISEnwREREFPj4+AkFBQSYPDw+uBwcH+goKCpVpaWkJAAAAAAAAAAAAAAAAAAAAAAAAAAAVFRU6CQkJrgUFBeALCwt/CwsLBT4+PgFDQ0MZExMTkg4ODtEQEBB0aGhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhoaFBAQEGMODg6TEhISRxISEgNDQ0MAR0dHBywsLEcsLCxnLS0tNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoaGgEjIyMQIyMjHBgYGAcZGRkAwAcAAMAHAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAA+AAAAPgAAAH4AAAB+AAAA==';
document.head.appendChild(ico);

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

// CSS för fotnoter
var stajl = document.createElement('style');
stajl.setAttribute('type','text/css');
stajl.textContent = '\
sup.footnote { position: relative; display: inline-block; } \
sup.footnote > a:before { content: "["; } \
sup.footnote > a:after { content: "]"; } \
\
sup.footnote:hover .fn-tooltip { visibility: visible; } \
sup.footnote .fn-tooltip span.footnotereverse { display: none; } \
sup.footnote .fn-tooltip a { color: lightblue; } \
sup.footnote .fn-tooltip { \
	visibility: hidden; \
	width: 350px; \
	padding: 8px; \
	border-radius: 6px; \
	border: 1px solid #ccc; \
	box-shadow: 0 0 20px #ccc; \
	position: absolute; \
	bottom: 100%; \
	left: 50%; \
	margin: 0 0 5px -125px; \
	background: #000; \
	color: #fff; \
	text-align: left; \
	list-style-type: none; \
	font-size: 14px; \
	line-height: 1.4em; \
}';
document.head.appendChild(stajl);

// Kopiera previous/next-nav till toppen
if (!document.getElementById('navklon')) {
	var pn = document.querySelector('div.entry-next-prev-desktop').cloneNode(true);
	pn.setAttribute('id','navklon');
	var mp = document.querySelector('.site-main > article.post');
	mp.insertAdjacentElement('afterbegin',pn);
}