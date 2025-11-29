// ==UserScript==
// @name         Arstechnica
// @description  Ars stuff
// @author       Lars Andersson
// @version      1.3.3
// @include      https://arstechnica.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

if (document.URL.includes('/civis/')) {
	let list = document.querySelector('ul.p-sectionLinks-list');
	let urls = ['https://arstechnica.com/civis/forums/battlefront.14/', 'Battlefront',
							'https://arstechnica.com/civis/forums/linux-kung-fu.16/', 'Linux',
							'https://arstechnica.com/civis/forums/microsoft-os-software-colloquium.15/', 'Microsoft',
							'https://arstechnica.com/civis/forums/macintoshian-achaia.19/', 'Mac ach',
							'https://arstechnica.com/civis/forums/audio-visual-club.6/', 'A/V club',
							'https://arstechnica.com/civis/forums/case-and-cooling-fetish.7/', 'Cases & cooling',
							'https://arstechnica.com/civis/forums/cpu-motherboard-technologia.8/', 'CPU & MB',
							'https://arstechnica.com/civis/forums/other-hardware.11/', 'Other HW',
							'https://arstechnica.com/civis/forums/gaming-extra-strength-caplets.22/', 'Gaming'
						 ];
	for (var i = 0; i < urls.length; i = i + 2) {
		let enli = document.createElement('li');
		let divs = document.createElement('div'); divs.classList.add('p-navEl','u-ripple');
		let link = document.createElement('a'); link.href = urls[i]; link.classList.add('p-navEl-link');
		let span = document.createElement('span'); span.textContent = urls[i+1];
		enli.appendChild(divs);
		divs.appendChild(link);
		link.appendChild(span);
		list.appendChild(enli);
	}
	document.querySelector('ul.p-sectionLinks-list li:has(a[href*="/civis/forums/-/mark-read?date="])').remove();
}