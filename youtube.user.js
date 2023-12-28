// ==UserScript==
// @name         Youtube
// @description  Länka till video utan playlist
// @author       Lars Andersson
// @version      1.4
// @include      https://www.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

var url = document.URL;

function createElement(type, attributes) {
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

if (url.includes("/playlist") == true) {
	function fixit() {
		var videor = document.querySelectorAll('ytd-playlist-video-renderer > div#content #meta a[href*="/watch"]');
		console.log("Hej! "+videor.length);
		for (var i=0; i<videor.length; i++) {
			var lnk = videor[i].href.split('&',1)[0];
			var thea = createElement('a', {href: lnk, class: 'yt-simple-endpoint style-scope yt-formatted-string', style: 'white-space: unset'});
			thea.textContent = ' | Spela upp utan playlist';
			document.querySelectorAll('ytd-playlist-video-renderer > div#content #meta h3 + ytd-video-meta-block #byline-container > ytd-channel-name yt-formatted-string#text')[i].appendChild(thea);
		}
	}
	function fnc_hide() {
		var seen = document.querySelectorAll('ytd-playlist-video-renderer:has(ytd-thumbnail-overlay-resume-playback-renderer.ytd-thumbnail)');
		for (var i = 0; i < seen.length; i++) { seen[i].style.display = "none"; }
	}
	function btn_hide() {
		var plejs = document.querySelector('.metadata-action-bar + .play-menu');
		var lnk_hide = document.createElement('a');
		lnk_hide.classList.add('yt-spec-button-shape-next','yt-spec-button-shape-next--tonal','yt-spec-button-shape-next--overlay','yt-spec-button-shape-next--size-m');
		lnk_hide.textContent = "Dölj sedda"; lnk_hide.style.marginBottom = "16px";
		lnk_hide.addEventListener("click",fnc_hide);
		plejs.insertAdjacentElement('afterEnd',lnk_hide);
	}
	window.setTimeout(fixit, 1000);
	window.setTimeout(btn_hide, 1000);
}

else if (url.includes("/watch?v=") && url.includes('&list=')) {
	function killpl() {
		var link = url.split('&list')[0];
		var kill = createElement('a', { href: link, style: 'border-radius: 2px; padding: var(--yt-button-padding); \
			background-color: var(--yt-spec-brand-button-background); color: var(--yt-spec-static-brand-white); \
			font-size: var(--ytd-tab-system_-_font-size); font-weight: var(--ytd-tab-system_-_font-weight); letter-spacing: var(--ytd-tab-system_-_letter-spacing); \
			text-decoration: none; text-transform: var(--ytd-tab-system_-_text-transform);' });
		kill.textContent = "Mörda playlist";
		var killdiv = createElement('div', { style: 'margin-bottom: 16px;' } );
		var pl = document.querySelector('#secondary-inner > #playlist');
		killdiv.appendChild(kill); pl.insertAdjacentElement('afterEnd', killdiv);
	}
	window.setTimeout(killpl, 1500);
}

function rmshorts() {
	var shorts = document.querySelectorAll('a[href^="/shorts/"]');
	// console.log(shorts.length);
	for (var i=0; i<shorts.length; i++) {
		shorts[i].href = shorts[i].href.replace('/shorts/','/watch?v=');
	}
}
window.setTimeout(rmshorts, 2000);