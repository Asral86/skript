// ==UserScript==
// @name         Filmsidor
// @description  Länka ihop Filmtipset, Imdb, Cinemageddon, Letterboxd
// @author       Lars Andersson
// @version      1.2.4
// @include      *://www.filmtipset.se/film/*
// @include      *://*.imdb.com/title/*
// @include      *://cinemageddon.net/details.php?*
// @include      *://letterboxd.com/*
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
  var sidebar = document.getElementById('sidebar');
  var imdbid = document.querySelector('meta[property="pageId"]').getAttribute("content");
  //var ftlink = createElement('a', {href: 'http://www.filmtipset.se/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); ftlink.textContent = 'Filmtipset';
  var cglink = createElement('a', {href: 'https://cinemageddon.net/browse.php?search=' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); cglink.textContent = 'Cinemageddon';
  var lblink = createElement('a', {href: 'https://letterboxd.com/imdb/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); lblink.textContent = 'Letterboxd';
  var sbdiv = createElement('div', {class: 'mini-article'}); /*var br1 = createElement('br');*/ var enbr = createElement('br');
  //sbdiv.appendChild(ftlink); sbdiv.appendChild(br1);
  sbdiv.appendChild(cglink); sbdiv.appendChild(enbr);
  sbdiv.appendChild(lblink);
  sidebar.insertBefore(sbdiv,sidebar.firstChild);
	
	// Döda zergnet-bajs
	var bajs = document.querySelector('#sidebar > .mini-article > .ab_widget > .ab_zergnet');
	bajs.parentNode.parentNode.remove();
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
  var flag = document.querySelector('.col-main > p.text-footer span.report-link');
  //var ftlink = createElement('a', {href: 'http://www.filmtipset.se/' + imdb, class: 'micro-button', rel: 'noopener noreferrer'}); ftlink.textContent = "FT";
  var cglink = createElement('a', {href: 'https://cinemageddon.net/browse.php?search=' + imdb, class: 'micro-button', rel: 'noopener noreferrer'}); cglink.textContent = "CG";
  var spejs = document.createTextNode(" "); var spsp = document.createElement('span');
  spsp.appendChild(spejs);
  //flag.insertAdjacentElement('beforebegin',ftlink);
  flag.insertAdjacentElement('beforebegin',spsp);
  flag.insertAdjacentElement('beforebegin',cglink);
}