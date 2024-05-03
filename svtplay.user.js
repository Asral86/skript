// ==UserScript==
// @name         SVT Play
// @description  Lägg till slutdatum i titel
// @author       Lars Andersson
// @version      1.1.1
// @include      https://www.svtplay.se/video/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function addimdb() {
	var titel = document.querySelector('h1');
	if (titel.previousElementSibling.textContent.includes('långfilm')) {
		var imdb = document.createElement('a');
		imdb.href = "https://www.imdb.com/find/?s=all&q=" + titel.textContent;
		imdb.textContent = " // Imdb"; imdb.target = "_blank";
		imdb.style = "text-decoration: none; color: rgb(235, 235, 230); outline: none;";
		titel.previousElementSibling.insertAdjacentElement('beforeend',imdb);
	}
}
window.setTimeout(addimdb,2000);

var dagar = new Array('Mån','Tis','Ons','Tor','Fre','Lör','Sön');

function fixit() {
	var strng = document.querySelector('dl > div:nth-child(2) dd').textContent; // console.log(strng);
	if (strng.includes('Ikväll') === true) {
		var datum = new Date();
	}
	else if (strng.includes('Imorgon') === true) {
		var datum = new Date();
		datum.setDate(datum.getDate() + 1);
	}
	else {
		strng = strng.replace('maj','may').replace('okt','oct');
		for (var i=0; i < dagar.length; i++) {
			if (strng.includes(dagar[i]) === true) { strng = strng.replace(dagar[i],'') +' 2024'; /* console.log(strng); */ }
		}
		var datum = new Date(strng); // console.log(datum);
	}
	var titel = new Intl.DateTimeFormat('sv-SE', { year: '2-digit', month: '2-digit', day: '2-digit' }).format(datum);
	if (document.body.classList.contains('datumtitel') !== true) { document.title = titel + ' ' + document.title; }
	document.body.classList.add('datumtitel');
}

window.setTimeout(fixit,1000);
window.setTimeout(fixit,3000);
window.setTimeout(fixit,5000);