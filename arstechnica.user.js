// ==UserScript==
// @name         Arstechnica
// @description  Snyggare tid i bylines
// @author       Lars Andersson
// @version      1.0
// @include      https://arstechnica.com/*
// @exclude      https://arstechnica.com/civis/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

if (document.body.classList.contains('single-post') === true) {
  var datum = document.querySelector('.article-header .byline time'); console.log(datum);
  var datte = new Date(datum.getAttribute('datetime')); console.log(datte);
  var stajl = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  datum.setAttribute('title', datum.textContent);
  datum.textContent = datte.toLocaleString('sv-SE', stajl); 
}