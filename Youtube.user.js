// ==UserScript==
// @name         Youtube
// @description  Länka till video utan playlist
// @author       Lars Andersson
// @version      1.1
// @include      https://www.youtube.com/playlist*
// @include      https://www.youtube.com/watch?v=*&list=*
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
	window.setTimeout(fixit, 1000);
}

else if (url.includes("/watch?v=") == true) {
	var link = url.split('&list')[0];
	var kill = createElement('a', { href: link, style: 'position: fixed; bottom: 8px; right: 8px; \
		background-color: var(--yt-spec-brand-button-background); color: var(--yt-spec-static-brand-white); \
		border-radius: 2px; padding: var(--yt-button-padding); \
		font-size: var(--ytd-tab-system_-_font-size); font-weight: var(--ytd-tab-system_-_font-weight); letter-spacing: var(--ytd-tab-system_-_letter-spacing); \
		text-decoration: none; text-transform: var(--ytd-tab-system_-_text-transform);' });
	kill.textContent = "Mörda playlist";
	document.body.appendChild(kill);
}