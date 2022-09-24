// ==UserScript==
// @name         Torrentday
// @description  Highlighta färdiga torrents och fixa titel
// @version      1.1
// @author       Lars Andersson
// @namespace    https://github.com/Asral86/skript
// @match        *://www.torrentday.com/peers?u=*
// @match        *://www.torrentday.com/t?q=*
// @grant        none
// ==/UserScript==

var url = document.URL;

if (url.includes('/peers') == true) {
	var done = document.querySelectorAll('#pageWrapper > table.fw tr > td.ar:nth-of-type(8)');
	for (var i = 0; i < done.length; i++) {
		if (done[i].textContent.includes(' to go') == false) {
			done[i].parentNode.style.fontWeight = 'bold';
		}
	}
	document.querySelector('#pageWrapper > table.fw').style.width = '105.5%';
}
else if (url.includes('/t?q=') == true) {
	var string = document.querySelector('#uiSearch input[name="q"]').value;
	document.title = string + " | " + document.title;
}