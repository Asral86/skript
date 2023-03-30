// ==UserScript==
// @name         Filmsidor
// @description  Länka ihop Filmtipset, Imdb, Cinemageddon, Letterboxd
// @author       Lars Andersson
// @version      1.5.3
// @match        *://www.filmtipset.se/film/*
// @match        *://*.imdb.com/title/*
// @match        *://cinemageddon.net/details.php?*
// @match        *://letterboxd.com/*
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
	var rblink = createElement('a', {href: 'http://rarbg.to/torrents.php?search=' + imdbid + '&order=size&by=DESC', target: '_blank', rel: 'noopener noreferrer'}); rblink.textContent = 'Rarbg';

	if (document.getElementById('styleguide-v2')) { // gamla stilen, använd sidebar
		var sidebar = document.getElementById('sidebar'); //console.log('bläh');
		var sbdiv = createElement('div', {class: 'mini-article', style: 'margin-bottom: 1em;'}); var br1 = createElement('br'); var br2 = createElement('br');
		sbdiv.appendChild(lblink); sbdiv.appendChild(br1);
		sbdiv.appendChild(cglink); sbdiv.appendChild(br2);
		sbdiv.appendChild(rblink);
		sidebar.insertBefore(sbdiv,sidebar.firstChild);
	}
	else if (document.getElementById('__next')) { // nya stilen
		var head = document.querySelector('h1[data-testid="hero__pageTitle"] + ul.ipc-inline-list--show-dividers');
		var lilb = document.createElement('li'); lilb.classList.add('ipc-inline-list__item');
		var licg = document.createElement('li'); licg.classList.add('ipc-inline-list__item');
		var lirb = document.createElement('li'); lirb.classList.add('ipc-inline-list__item');
		lblink.classList.add('ipc-link', 'ipc-link--baseAlt'); lilb.appendChild(lblink);
		cglink.classList.add('ipc-link', 'ipc-link--baseAlt'); licg.appendChild(cglink);
		rblink.classList.add('ipc-link', 'ipc-link--baseAlt'); lirb.appendChild(rblink);
		head.appendChild(lilb);
		head.appendChild(licg);
		head.appendChild(lirb);
	}

	//var ftlink = createElement('a', {href: 'http://www.filmtipset.se/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); ftlink.textContent = 'Filmtipset';
	//sbdiv.appendChild(ftlink); sbdiv.appendChild(br1);

	// Döda zergnet-bajs - behövs inte längre?
	//var bajs = document.querySelector('#sidebar > .mini-article > .ab_widget > .ab_zergnet');
	//bajs.parentNode.parentNode.remove();
}

else if (url.includes('cinemageddon.net') == true) {
  document.title = document.title.replace(' torrent details for ', ' ');
  if (document.querySelector('#altlist_row + tr + tr + tr td.rowhead').textContent == "IMDB") {
    var imdb = document.querySelectorAll('#altlist_row + tr + tr + tr a[href^="http://www.imdb.com/title/"]'); }
  else { var imdb = document.querySelectorAll('#altlist_row + tr + tr + tr + tr a[href^="http://www.imdb.com/title/"]'); }
  if ( imdb[0].textContent != "" ) {
    for (var i=0; i<=imdb.length-1; i++) {
      if (imdb[i].classList.contains('lb') !== true) {
				imdb[i].classList.add('lb');
      	//var ft = createElement('a', {href: 'http://www.filmtipset.se/' + imdb[i].textContent, target: '_blank', rel: 'noopener noreferrer'});
      	var lb = createElement('a', {href: 'https://letterboxd.com/imdb/' + imdb[i].textContent, target: '_blank', rel: 'noopener noreferrer'});
      	//ft.textContent = ' (ft)';
      	lb.textContent = ' (lb)';
      	//imdb[i].parentNode.insertBefore(ft, imdb[i].nextSibling);
      	imdb[i].parentNode.insertBefore(lb, imdb[i].nextSibling);
      }
    }
  }
  // Auto-expandera bilder i beskrivningar
  var imgs = document.querySelectorAll('#torrent_details + table.frames img[title="Click to see original size"]');
  for (var y = 0; y <= imgs.length; y++) {
    if (imgs[y].hasAttribute('width')) imgs[y].removeAttribute('width');
  }
}

else if (url.includes('https://letterboxd.com/film/') == true) {
	var imdb = document.querySelector('.col-main > p.text-footer a.micro-button[data-track-action="IMDb"]').href.replace('http://www.imdb.com/title/', '').replace('/maindetails', '');
	var namn = document.querySelector('#featured-film-header > h1').innerHTML.replace('&nbsp;','+');
	var flag = document.querySelector('.col-main > p.text-footer span.block-flag-wrapper');
	var ftln = createElement('a', {href: 'http://www.filmtipset.se/hitta?q=' + namn, class: 'micro-button', rel: 'noopener noreferrer'}); ftln.textContent = "FT";
	var cgln = createElement('a', { href: 'https://cinemageddon.net/browse.php?search=' + imdb, class: 'micro-button', rel: 'noopener noreferrer' }); cgln.textContent = "CG";
	var rbln = createElement('a', { href: 'http://rarbg.to/torrents.php?search=' + imdb + '&order=size&by=DESC', class: 'micro-button', rel: 'noopener noreferrer' }); rbln.textContent = "RB";
	flag.insertAdjacentElement('beforebegin',ftln); flag.insertAdjacentText('beforebegin',' ');
	flag.insertAdjacentElement('beforebegin',cgln); flag.insertAdjacentText('beforebegin',' ');
	flag.insertAdjacentElement('beforebegin',rbln);
}