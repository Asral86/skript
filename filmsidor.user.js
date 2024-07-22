// ==UserScript==
// @name         Filmsidor
// @description  Länka ihop filmsidor
// @author       Lars Andersson
// @version      1.8
// @match        *://www.filmtipset.se/film/*
// @match        *://*.imdb.com/title/*
// @match        *://cinemageddon.net/details.php?*
// @match        *://letterboxd.com/*
// @match        *://netflixguiden.se/film/*
// @grant        none
// ==/UserScript==

function createElement(type, attributes) {
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

var url = document.URL;

if (url.includes('www.filmtipset.se') == true) {
	var imdb   = document.querySelector('div.content a[href*="imdb.com/title/"]');
	var imdb2  = imdb.getAttribute('href').split('/title/');
	var imdbid = imdb2[1]; //console.log(imdbid.length);
	if (imdbid.length > 9 && imdbid.includes('tt0') == true) { // Ta bort extra nollor i imdb-id
		for (var i=imdbid.length; i>9; i--) { imdbid = imdbid.replace('tt0', 'tt'); }
	}
	imdb.href = "https://www.imdb.com/title/" + imdbid;
	var cglink = createElement('a', {href: 'https://cinemageddon.net/browse.php?search=' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); cglink.textContent = "Cinemageddon";
	var lblink = createElement('a', {href: 'https://letterboxd.com/imdb/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); lblink.textContent = "Letterboxd";
	var span1  = createElement('span', {class: 'postmeta hideMobile'});
	var span2  = createElement('span', {class: 'postmeta hideMobile'});
	var ikon1  = createElement('i', {class: 'fa fa-film'});
	var ikon2  = createElement('i', {class: 'fa fa-film'});
	var enbr   = createElement('br');
	span1.appendChild(ikon1); span1.appendChild(lblink);
	span2.appendChild(ikon2); span2.appendChild(cglink);
	imdb.parentNode.insertAdjacentElement('afterend', span1);
	imdb.parentNode.insertAdjacentElement('afterend', span2);
	imdb.parentNode.insertAdjacentElement('beforebegin', enbr);
}

else if (url.includes('imdb.com') == true) {
	if (document.getElementById('styleguide-v2')) { var imdbid = document.querySelector('meta[property="pageId"]').getAttribute("content"); }  // old
	if (document.getElementById('__next')) { var imdbid = document.querySelector('meta[property="imdb:pageConst"]').getAttribute("content"); } // new

	var cglink = createElement('a', {href: 'https://cinemageddon.net/browse.php?search=' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); cglink.textContent = 'Cinemageddon';
	var lblink = createElement('a', {href: 'https://letterboxd.com/imdb/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); lblink.textContent = 'Letterboxd';

	if (document.getElementById('styleguide-v2')) { // gamla stilen, använd sidebar
		var sidebar = document.getElementById('sidebar');
		var sbdiv = createElement('div', {class: 'mini-article', style: 'margin-bottom: 1em;'}); var br1 = createElement('br'); // var br2 = createElement('br');
		sbdiv.appendChild(lblink); sbdiv.appendChild(br1);
		sbdiv.appendChild(cglink); // sbdiv.appendChild(br2);
		sidebar.insertBefore(sbdiv,sidebar.firstChild);
	}
	else if (document.getElementById('__next')) { // nya stilen
		var head = document.querySelector('h1[data-testid="hero__pageTitle"] ~ ul.ipc-inline-list--show-dividers');
		var lilb = document.createElement('li'); lilb.classList.add('ipc-inline-list__item');
		var licg = document.createElement('li'); licg.classList.add('ipc-inline-list__item');
		lblink.classList.add('ipc-link', 'ipc-link--baseAlt'); lilb.appendChild(lblink);
		cglink.classList.add('ipc-link', 'ipc-link--baseAlt'); licg.appendChild(cglink);
		head.appendChild(lilb);
		head.appendChild(licg);
	}
}

else if (url.includes('cinemageddon.net') == true) {
	document.title = document.title.replace('cinemageddon // torrent details for "', ' ').slice(0,-1) + " // cinemageddon";
	if (document.querySelector('#altlist_row + tr + tr + tr td.rowhead').textContent == "IMDB") {
		var imdb = document.querySelectorAll('#altlist_row + tr + tr + tr a[href^="http://www.imdb.com/title/"]'); }
	else { var imdb = document.querySelectorAll('#altlist_row + tr + tr + tr + tr a[href^="http://www.imdb.com/title/"]'); }
	if ( imdb[0].textContent != "" ) {
		for (var i=0; i<=imdb.length-1; i++) {
			if (imdb[i].classList.contains('lb') !== true) {
				imdb[i].classList.add('lb');
				var lb = createElement('a', {href: 'https://letterboxd.com/imdb/' + imdb[i].textContent, target: '_blank', rel: 'noopener noreferrer'});
				lb.textContent = ' (lb)';
				imdb[i].parentNode.insertBefore(lb, imdb[i].nextSibling);
			}
		}
	}
	// Auto-expandera bilder i beskrivningar
	var imgs = document.querySelectorAll('#torrent_details + table.frames img[title="Click to see original size"]');
	if (imgs.length > 0) {
		for (var y = 0; y <= imgs.length; y++) {
			if (imgs[y].hasAttribute('width')) imgs[y].removeAttribute('width');
		}
	}
}

else if (url.includes('https://letterboxd.com/film/') == true) {
	var imdb = document.querySelector('.col-main > p.text-footer a.micro-button[data-track-action="IMDb"]').href.replace('http://www.imdb.com/title/', '').replace('/maindetails', '');
	var titl = document.querySelector('h1.filmtitle').textContent.replace('&nbsp;','+');
	var year = document.querySelector('div.releaseyear a').textContent;
	var flag = document.querySelector('.col-main > p.text-footer span.block-flag-wrapper');
	var cgln = createElement('a', { href: 'https://cinemageddon.net/browse.php?search=' + imdb, class: 'micro-button', rel: 'noopener noreferrer' }); cgln.textContent = "CG";
	var exln = createElement('a', { href: 'https://ext.to/search/?q=' + titl + ' ' + year, class: 'micro-button', rel: 'noopener noreferrer' }); exln.textContent = "EX";
	flag.insertAdjacentElement('beforebegin',cgln); flag.insertAdjacentText('beforebegin',' ');
	flag.insertAdjacentElement('beforebegin',exln);
}

else if (url.includes('netflixguiden.se')) {
	let imdb = document.querySelector('.imdb').href.split('/title/')[1]; console.log(imdb);
	let pdiv = document.createElement('div'); pdiv.classList.add('imdb-rating');
	let ltbx = document.createElement('a');
	ltbx.href = 'https://letterboxd.com/imdb/' + imdb;
	ltbx.classList.add('imdb');
	ltbx.referrer = 'noopener noreferrer nofollow';
	ltbx.textContent = 'Letterboxd';
	ltbx.target = '_blank';
	pdiv.appendChild(ltbx);
	document.querySelector('div.ratings').appendChild(pdiv);
}