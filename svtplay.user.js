// ==UserScript==
// @name         SVT Play
// @description  Lägg till slutdatum i titel
// @author       Lars Andersson
// @version      1.0
// @include      https://www.svtplay.se/video/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

var strng = document.querySelector('#mer-information .cnluJd > .farjXo:nth-child(2) .iLAZCI').textContent; // console.log(strng);
var dagar = new Array('Mån','Tis','Ons','Tor','Fre','Lör','Sön');

function fixit() {
if (strng.includes('Ikväll') === false && strng.includes('Imorgon') === false) {
	for (var i=0; i < dagar.length; i++) {
		if (strng.includes(dagar[i]) === true) { strng = strng.replace(dagar[i],'')+' 2023'; }
	}
	var datum = new Date(strng);
	var titel = new Intl.DateTimeFormat('sv-SE', { year: '2-digit', month: '2-digit', day: '2-digit' }).format(datum);
	document.title = titel + ' ' + document.title; // console.log(document.title);
}
}

window.setTimeout(fixit,1000);