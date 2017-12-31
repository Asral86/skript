// ==UserScript==
// @name         SF
// @description  Dölj kommande filmer i listan
// @author       Lars Andersson
// @version      1.0
// @include      https://www.sf.se/
// @grant        none
// ==/UserScript==

/*
function createElement(type, attributes) {
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

function hidefilm() {
	var filmer = document.querySelectorAll('ul.ncgMovieList[au-target-id="200"] > li.ncgMovie');
	for (var i=0; i<filmer.length; i++) {
		var premiar = filmer[i].getElementsByClassName('ncgReleaseDate');
		if (premiar.length === 1) { filmer[i].setAttribute('style', 'display: none;'); }
	}
}

var hidebutton = createElement('a', {style: 'position: fixed; bottom: 0; left: 0; color: white;'});
hidebutton.textContent = "Dölj kommande filmer";
hidebutton.addEventListener("click", hidefilm, true);
document.body.appendChild(hidebutton);
*/