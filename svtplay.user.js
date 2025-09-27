// ==UserScript==
// @name         SVT Play
// @description  Lägg till slutdatum i titel, organisera sista-listan
// @author       Lars Andersson
// @version      1.3.9
// @match        https://www.svtplay.se/video/*
// @match        https://www.svtplay.se/lista/lastchance_start/sista-chansen
// @grant        none
// @run-at       document-idle
// ==/UserScript==

if (document.URL.includes('/lastchance_start/sista-chansen')) {
	function fixlist() {
		let daddy = document.querySelector('#play_main-content > section > div > section');
		let klass = daddy.firstChild.classList;
		let h1div = document.createElement('div'); h1div.classList.add(klass[0], klass[1]); h1div.id = 'h1';
		let h2div = document.createElement('div'); h2div.classList.add(klass[0], klass[1]); h2div.id = 'h2';
		let s1div = document.createElement('div'); s1div.classList.add(klass[0], klass[1]); s1div.id = '1d';
		let s2div = document.createElement('div'); s2div.classList.add(klass[0], klass[1]); s2div.id = '2d';
		let s3div = document.createElement('div'); s3div.classList.add(klass[0], klass[1]); s3div.id = '3d';
		let oadiv = document.createElement('div'); oadiv.classList.add(klass[0], klass[1]); oadiv.id = 'oa';
		let cards = document.querySelectorAll('#play_main-content article[data-css-selector="contentItemCardArticle"]');
		daddy.appendChild(h1div); daddy.appendChild(h2div); daddy.appendChild(oadiv); daddy.appendChild(s1div); daddy.appendChild(s2div); daddy.appendChild(s3div);
		for (let i = 0; i < cards.length; i++) {
			if (cards[i].querySelector('[data-testid="play-badge"]') === null) { document.getElementById('3d').appendChild(cards[i]); }
			else if (cards[i].querySelector('[data-testid="play-badge"]').textContent.includes('timmar kvar') == true)  {
				let hours = cards[i].querySelector('[data-testid="play-badge"]').textContent.split(' ')[0]; // console.log(hours);
				if (hours >= 10)     { document.getElementById('h2').appendChild(cards[i]); }
				else if (hours >= 5) { document.getElementById('h1').appendChild(cards[i]); }
			}
			else if (cards[i].querySelector('[data-testid="play-badge"]').textContent.includes('1 dag kvar') == true)   { document.getElementById('1d').appendChild(cards[i]); }
			else if (cards[i].querySelector('[data-testid="play-badge"]').textContent.includes('Öppet Arkiv') == true)  { document.getElementById('oa').appendChild(cards[i]); }
			else if (cards[i].querySelector('[data-testid="play-badge"]').textContent.includes('2 dagar kvar') == true) { document.getElementById('2d').appendChild(cards[i]); }
			else if (cards[i].querySelector('[data-testid="play-badge"]').textContent.includes('3 dagar kvar') == true) { document.getElementById('3d').appendChild(cards[i]); }
		}
	}
	window.setTimeout(fixlist,1500);
}
else {
	function addimdb() {
		let titel = document.querySelector('h1');
		let genre = document.querySelector('li[data-rt="details-page-genre-link"] a[href="/kategori/filmer"]');
		if (genre !== null) {
			let pppp = document.createElement('p');
			let text = document.createTextNode(' // ');
			let imdb = document.createElement('a');
			let lbxd = document.createElement('a');
			pppp.style = "color: rgb(235, 235, 230); font-family: var(--svt-font-family); font-size: 1.3rem; margin-top: 1.3rem;";
			imdb.href = "https://www.imdb.com/find/?s=all&q=" + titel.textContent;
			imdb.textContent = " Imdb"; imdb.target = "_blank";
			imdb.style = "text-decoration: underline; color: rgb(235, 235, 230); outline: none;";
			lbxd.href = "https://letterboxd.com/search/" + titel.textContent;
			lbxd.textContent = "Letterboxd"; lbxd.target = "_blank";
			lbxd.style = "text-decoration: underline; color: rgb(235, 235, 230); outline: none;";
			pppp.appendChild(imdb);
			pppp.appendChild(text);
			pppp.appendChild(lbxd);
			genre.parentElement.parentElement.insertAdjacentElement('afterEnd',pppp);
		}
	}
	window.setTimeout(addimdb,2000);
	
	let dagar = new Array('Mån','Tis','Ons','Tor','Fre','Lör','Sön');
	
	function fixit() {
		let boxes = document.querySelectorAll('dl > div > dt'); // console.log(boxes);
		let strng;
		for (let i = 0; i < boxes.length; i++) {
			if (boxes[i].textContent === "Kan ses till") { strng = boxes[i].nextSibling.textContent; break; }
		}
		if (strng.includes('Ikväll') === true || strng.includes('Inatt') === true || strng.includes('Idag') === true) {
			var datum = new Date();
		}
		else if (strng.includes('Imorgon') === true) {
			var datum = new Date();
			datum.setDate(datum.getDate() + 1);
		}
		else {
			strng = strng.replace('maj','may').replace('okt','oct');
			for (let i=0; i < dagar.length; i++) {
				if (strng.includes(dagar[i]) === true) {
					let year = new Date();
					strng = strng.replace(dagar[i],'') + ' ' + year.getFullYear(); // console.log(strng);
				}
			}
			var datum = new Date(strng); // console.log(datum);
		}
		let titel = new Intl.DateTimeFormat('sv-SE', { year: '2-digit', month: '2-digit', day: '2-digit' }).format(datum);
		if (document.body.classList.contains('datumtitel') !== true) { document.title = titel + ' ' + document.title; }
		document.body.classList.add('datumtitel');
	}
	
	window.setTimeout(fixit,1000);
	window.setTimeout(fixit,3000);
	window.setTimeout(fixit,5000);
}