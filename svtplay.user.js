// ==UserScript==
// @name         SVT Play
// @description  Lägg till slutdatum i titel
// @author       Lars Andersson
// @version      1.2.1
// @match        https://www.svtplay.se/video/*
// @match        https://www.svtplay.se/lista/lastchance_start/sista-chansen
// @grant        none
// @run-at       document-idle
// ==/UserScript==

if (document.URL.includes('/lastchance_start/sista-chansen')) {
	function fixlist() {
		let s1 = document.createElement('div'); s1.classList.add('c7150154a', 'c23808003'); s1.id = '1d';
		let s2 = document.createElement('div'); s2.classList.add('c7150154a', 'c23808003'); s2.id = '2d';
		let s3 = document.createElement('div'); s3.classList.add('c7150154a', 'c23808003'); s3.id = '3d';
		let daddy = document.querySelector('#play_main-content div[data-helix-type="list"] > section');
		let cards = document.querySelectorAll('#play_main-content article[data-css-selector="contentItemCardArticle"]');
		let texts = document.querySelectorAll('#play_main-content article[data-css-selector="contentItemCardArticle"] div[data-testid="play-badge"] > span:first-child');
		daddy.appendChild(s1); daddy.appendChild(s2); daddy.appendChild(s3);
		for (var i = 0; i < cards.length; i++) {
			if (texts[i].textContent.includes('1 dag kvar') == true) { document.getElementById('1d').appendChild(cards[i]); }
			else if (texts[i].textContent.includes('2 dagar kvar') == true) { document.getElementById('2d').appendChild(cards[i]); }
			else if (texts[i].textContent.includes('3 dagar kvar') == true) { document.getElementById('3d').appendChild(cards[i]); }
		}
	}
	window.setTimeout(fixlist,1500);
}
else {
	function addimdb() {
		var titel = document.querySelector('h1');
		if (titel.previousElementSibling.textContent.includes('film')) {
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
}