// ==UserScript==
// @name        	Tech Report
// @description 	Add previous/next links for multi-page reviews
// @author      	Lars Andersson
// @version     	1.0
// @include     	https://techreport.com/review/*
// @grant       	none
// @run-at				document-idle
// ==/UserScript==

if (document.getElementById('prevlink') == null & document.getElementById('nextlink') == null) {
var sidlista = document.querySelector('p.post-nav-links');
var nuvsidan = document.querySelector('p.post-nav-links span.current').textContent; console.log("Sida: "+nuvsidan);
var sidorna  = document.querySelectorAll('p.post-nav-links .post-page-numbers');

var br = document.createElement('br');
var spejs = document.createTextNode(' | ');
sidlista.appendChild(br);

if (nuvsidan !== "1") {
	var sidaprev = sidorna[nuvsidan-2]; console.log("Förra: "+sidaprev.href);
  var prevlink = document.createElement('a');
	prevlink.href = sidaprev; prevlink.id = "prevlink";
  prevlink.textContent = "<< Previous";
  sidlista.appendChild(prevlink);
  if (nuvsidan < sidorna.length) { sidlista.appendChild(spejs); }
}

if (nuvsidan < sidorna.length) {
	var sidanext = sidorna[nuvsidan]; console.log("Nästa: "+sidanext.href);
	var nextlink = document.createElement('a');
	nextlink.href = sidanext; nextlink.id = "nextlink";
  nextlink.textContent = "Next >>";
	sidlista.appendChild(nextlink);
}
}