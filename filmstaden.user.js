// ==UserScript==
// @name         Filmstaden
// @author       Lars Andersson
// @version      1.0
// @include      https://www.filmstaden.se/film/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function addlbxd() {
	let name = document.querySelector('h1').textContent.toLowerCase();
	let lbxd = document.createElement('a');
	let imdb = document.createElement('a');
	lbxd.href = 'https://letterboxd.com/search/' + name + '/';
	lbxd.text = 'Letterboxd';
	lbxd.target = '_blank';
	imdb.href = 'https://www.imdb.com/find/?s=all&q=' + name;
	imdb.text = 'Imdb';
	imdb.target = '_blank';
	document.querySelector('h1 + div > div:last-of-type').appendChild(lbxd);
	document.querySelector('h1 + div > div:last-of-type').appendChild(imdb);
}

window.setTimeout(addlbxd,1500);