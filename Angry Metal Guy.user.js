// ==UserScript==
// @name         Angry Metal Guy
// @description  Gör fotnoter till tooltips, och fixa prev/next
// @author       Lars Andersson
// @version      1.4
// @match        *://www.angrymetalguy.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Fixa favicon
var ico = document.createElement('link');
ico.setAttribute('rel', 'icon');
ico.href = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAACkpKQEnJycLFhYWNwsLC3kBAQGqAAAAvgAAALwBAQGqCAgIdA8PDyoMDAwCAAAAAAAAAAAAAAAAODg4ADw8PAArKysPFxcXXwoKCroBAQHkAAAA7gAAAPIAAADyAAAA7gEBAeMGBgajDQ0NPBQUFAAAAAAAEhISAEJCQgBISEgKGBgYXgoKCsMCAgL4AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AQEB8AUFBZYVFRUhBQUFABcXFwAeHh4DHx8fRwwMDLcDAwP2AAAA/wEBAfgDAwPmBAQE5QAAAP4AAAD/AAAA/wAAAP8CAgLMCgoKVAUFBQIHBwcAEBAQBREREYEEBAToAAAA/wAAAP4DAwPnCgoKwAgICMoEBATdBQUFwAMDA9EBAQHzAQEB4AICAnYCAgIFAgICAAwMDAQMDAxrBgYGygICAvQAAAD9AwMD6AkJCccQEBDGGBgYoxoaGmgMDAx9AgICzwAAAOQCAgKAAAAABgAAAAA7OzsBPT09GRsbG2sJCQnAAgIC6wICAvUHBwfuICAguT8/P2YuLi5QGRkZTwMDA6wDAwPgCQkJgwgICAYICAgAODg4AD09PQIlJSU2EhISfA0NDacQEBC/FRUVxjY2Nns6OjosKysrORwcHEwEBASsBgYG4RISEoUxMTEGKCgoADo6OgBCQkIHHBwcag4ODrkPDw+mFxcXlw0NDdQWFha4GBgYpxMTE8gPDw+YBAQEuQYGBuYODg6YSEhIDD09PQFKSkoAVVVVCB0dHXsJCQngCQkJwhkZGZcPDw/TFhYWsBwcHJUICAjYFBQUig8PD6MFBQXvBwcHuUBAQCU8PDwBREREAUtLSw0ZGRmHCAgI7AoKCrctLS1KFBQURBwcHDkhISErDQ0NRxYWFicRERF4BgYG6QUFBc4tLS1EKysrA0JCQgFGRkYZFBQUmAcHB/MJCQmlV1dXGgAAAAAAAAAAAwMDAAAAAAAVFRUAFBQUXAgICNcGBgbZISEhXiAgIARAQEABREREJREREagGBgb6CAgInltbWxBKSkoAPz8/AERERABPT08AAAAAABYWFlAJCQnKBAQE5xISEnwREREFPj4+AkFBQSYPDw+uBwcH+goKCpVpaWkJAAAAAAAAAAAAAAAAAAAAAAAAAAAVFRU6CQkJrgUFBeALCwt/CwsLBT4+PgFDQ0MZExMTkg4ODtEQEBB0aGhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhoaFBAQEGMODg6TEhISRxISEgNDQ0MAR0dHBywsLEcsLCxnLS0tNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoaGgEjIyMQIyMjHBgYGAcZGRkAwAcAAMAHAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAA+AAAAPgAAAH4AAAB+AAAA==';
document.head.appendChild(ico);

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
if (!document.getElementById('navklon')) {
	var pn = document.querySelector('div.entry-next-prev-desktop').cloneNode(true);
	pn.setAttribute('id','navklon');
	var mp = document.querySelector('.site-main > article.post');
	mp.insertAdjacentElement('afterbegin',pn);
}