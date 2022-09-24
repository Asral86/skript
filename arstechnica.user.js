// ==UserScript==
// @name         Arstechnica
// @description  Snyggare tid i bylines, forumgrejs
// @author       Lars Andersson
// @version      1.1.1
// @include      https://arstechnica.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

if (document.body.classList.contains('single-post') === true) {
	var datum = document.querySelector('.article-header .byline time'); //console.log(datum);
	var datte = new Date(datum.getAttribute('datetime')); //console.log(datte);
	var stajl = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
	datum.setAttribute('title', datum.textContent);
	datum.textContent = datte.toLocaleString('sv-SE', stajl); 
}

else if (document.URL.includes('/civis/viewtopic.php') == true) {
	if (!document.getElementById('ull')) {
		var mittskit = document.querySelector('#userbar li.user-threads').cloneNode(true);
		var ull = document.createElement('ul');
		ull.classList.add('list-inline');
		ull.setAttribute('style','margin-top: 0.5em;');
		ull.id = 'ull';
		ull.appendChild(mittskit);
		document.querySelector('#bottom-reply + nav.breadcrumb').appendChild(ull);
	}
}