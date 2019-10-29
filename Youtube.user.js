// ==UserScript==
// @name         Youtube
// @description  Länka till video utan playlist på playlist-sidor
// @author       Lars Andersson
// @version      1.0.1
// @include      https://www.youtube.com/playlist*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function createElement(type, attributes) {
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

var videor = document.querySelectorAll('div#contents > ytd-playlist-video-renderer > div#content > a[href*="/watch"]');
console.log("Hej! "+videor.length);
for (var i=0; i<videor.length; i++) {
  var lnk = videor[i].href.split('&',1)[0];
  var thea = createElement('a', {href: lnk, class: 'yt-simple-endpoint style-scope yt-formatted-string', style: 'white-space: unset'});
  thea.textContent = ' | Spela upp utan playlist';
  document.querySelectorAll('div#contents > ytd-playlist-video-renderer > div#content div#meta h3 + ytd-video-meta-block #byline-container > ytd-channel-name yt-formatted-string#text')[i].appendChild(thea);
}
