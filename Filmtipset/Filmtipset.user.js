// ==UserScript==
// @name        Filmtipset
// @description Förbättringar för Filmtipset
// @include     http://www.filmtipset.se/*
// @version     3.5
// @grant       none
// ==/UserScript==

function createElement(type, attributes) { // Från http://wiki.greasespot.net/Create_DOM_Structure
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

var url = document.URL;

if (url.includes("percentage_") == true) { // Fixa fler-länken på statistiksidor (procent)
	var fler = document.querySelector('a[href*="next=yes"]');
	fler.setAttribute('href', fler.getAttribute('href').replace('count_', 'percentage_'));
}
else if (url.includes("totalt_") == true) { // Fixa fler-länken på statistiksidor (totalt)
	var fler = document.querySelector('a[href*="next=yes"]');
	fler.setAttribute('href', fler.getAttribute('href').replace('count_', 'totalt_'));
}
else if (url.includes("yourpage.cgi") == true) { // Procent under betygsstaplar på användarsidor
	var stapel1 = document.getElementById('gradeStack1'); var ett = stapel1.getAttribute('title')*1;
	var stapel2 = document.getElementById('gradeStack2'); var tva = stapel2.getAttribute('title')*1;
	var stapel3 = document.getElementById('gradeStack3'); var tre = stapel3.getAttribute('title')*1;
	var stapel4 = document.getElementById('gradeStack4'); var fyr = stapel4.getAttribute('title')*1;
	var stapel5 = document.getElementById('gradeStack5'); var fem = stapel5.getAttribute('title')*1;
	var total = ett+tva+tre+fyr+fem;
	stapel1.firstElementChild.textContent = Math.round(ett / total * 1000)/10+"%"; 
	stapel2.firstElementChild.textContent = Math.round(tva / total * 1000)/10+"%";
	stapel3.firstElementChild.textContent = Math.round(tre / total * 1000)/10+"%";
	stapel4.firstElementChild.textContent = Math.round(fyr / total * 1000)/10+"%";
	stapel5.firstElementChild.textContent = Math.round(fem / total * 1000)/10+"%";
	stapel1.firstElementChild.style.left = Math.round((41-stapel1.firstElementChild.offsetWidth)/2)+"px";
	stapel2.firstElementChild.style.left = Math.round((41-stapel2.firstElementChild.offsetWidth)/2)+"px";
	stapel3.firstElementChild.style.left = Math.round((41-stapel3.firstElementChild.offsetWidth)/2)+"px";
	stapel4.firstElementChild.style.left = Math.round((41-stapel4.firstElementChild.offsetWidth)/2)+"px";
	stapel5.firstElementChild.style.left = Math.round((41-stapel5.firstElementChild.offsetWidth)/2)+"px";
}
else if (url.includes("/person/") == true) { // Extra statistik på personsidor
	// Samla ihop siffrorna...
	var antal_filmer = document.querySelectorAll('div.other_grade').length;
	var antal_5 = document.querySelectorAll('div.SetGradeSeen img[src$="grade_5_seen.png"]').length - document.querySelectorAll('div.SetGradeCalc img[src$="grade_5.png"]').length;
	var antal_4 = document.querySelectorAll('div.SetGradeSeen img[src$="grade_4_seen.png"]').length - document.querySelectorAll('div.SetGradeCalc img[src$="grade_4.png"]').length;
	var antal_3 = document.querySelectorAll('div.SetGradeSeen img[src$="grade_3_seen.png"]').length - document.querySelectorAll('div.SetGradeCalc img[src$="grade_3.png"]').length;
	var antal_2 = document.querySelectorAll('div.SetGradeSeen img[src$="grade_2_seen.png"]').length - document.querySelectorAll('div.SetGradeCalc img[src$="grade_2.png"]').length;
	var antal_1 = document.querySelectorAll('div.SetGradeSeen img[src$="grade_1_seen.png"]').length - document.querySelectorAll('div.SetGradeCalc img[src$="grade_1.png"]').length;
	var antal_betyg = antal_5 + antal_4 + antal_3 + antal_2 + antal_1;
	var andel = Math.round(antal_betyg / antal_filmer * 1000)/10;
	var snitt = Math.round(((antal_5*5)+(antal_4*4)+(antal_3*3)+(antal_2*2)+(antal_1*1))/antal_betyg * 100)/100;
	
	document.querySelector('td.big_canvas table[style="width:382px"] tr:nth-of-type(3) td+td').textContent += " (" + andel + "%)";
	if ( antal_betyg > 0 ) { document.querySelector('td.big_canvas table[style="width:382px"] tr:nth-of-type(3) td+td').textContent += ", snitt: "+snitt}
	
	// Vänners betyg...
	if (document.querySelectorAll('div.other_grade_1').length != 0) {
		var v_namn = document.querySelector('td.big_canvas > table td[colspan="2"] div[style] a[rel]').textContent;
		var v_antal_betyg = document.querySelectorAll('div.other_grade img.SetGradeImg').length;
		var v_antal_5 = document.querySelectorAll('div.other_grade_1 img[src$="grade_5_seen_member.png"]').length;
		var v_antal_4 = document.querySelectorAll('div.other_grade_1 img[src$="grade_4_seen_member.png"]').length;
		var v_antal_3 = document.querySelectorAll('div.other_grade_1 img[src$="grade_3_seen_member.png"]').length;
		var v_antal_2 = document.querySelectorAll('div.other_grade_1 img[src$="grade_2_seen_member.png"]').length;
		var v_antal_1 = document.querySelectorAll('div.other_grade_1 img[src$="grade_1_seen_member.png"]').length;
		var v_andel = Math.round(v_antal_betyg / antal_filmer * 1000)/10;
		var v_snitt = Math.round(((v_antal_5*5)+(v_antal_4*4)+(v_antal_3*3)+(v_antal_2*2)+(v_antal_1*1))/v_antal_betyg * 100)/100;
		
		var duharsett = document.querySelector('td.big_canvas table[style="width:382px"] tr:nth-of-type(3)');
		var v_harsett = createElement('tr');
		var v_harsett_td1 = createElement('td', {style: 'font-weight: bold'}); v_harsett_td1.textContent = v_namn+" har sett: ";
		var v_harsett_td2 = createElement('td'); v_harsett_td2.textContent = v_antal_betyg+" (" + v_andel + "%)";
		if ( v_antal_betyg > 0 ) { v_harsett_td2.textContent += ", snitt: "+v_snitt}
		v_harsett.appendChild(v_harsett_td1); v_harsett.appendChild(v_harsett_td2); duharsett.parentNode.insertBefore(v_harsett, duharsett.nextSibling);
	}
	
	// Betygslänkar i kommentarer...
	if (url.indexOf("?")>-1){ url = url.substr(0,url.indexOf("?")); }
	else if (url.indexOf("&")>-1){ url = url.substr(0,url.indexOf("&")); }
	var members = document.querySelectorAll('td.threadheadold > a.member:first-child');
	for (i = 0; i<=members.length-1; i++) {
		var member_nr = members[i].href.replace('http://www.filmtipset.se/yourpage.cgi?member=', '');
		var member_link = createElement('a', {href: url+"?member="+member_nr, class: "member"}); member_link.textContent = " [b]";
		members[i].parentNode.appendChild(member_link);
	}
}
else if (url.includes("update_movie.cgi") == true) { // Verifiering
	function update_sum() {
		var actors_sum = actors.length*2;
		for ( var i=0; i<actors.length; i++) { actors_sum += actors[i].value.length; }
		actors_sum += newactors.value.length;
		actors_sum_p.textContent = "Antal tecken: " + actors_sum;
		if ( actors_sum > 255 ) { actors_sum_p.style.color = "red"; }
		else { actors_sum_p.style.color = "black"; }
	}
	
	//var director = document.querySelector('input[name=director]');
	//var writer = document.querySelector('input[name=writer]');
	
	var actors = document.querySelectorAll('input[name^=actor]');
	var newactors = document.querySelector('textarea[name=newactors]');
	var actors_sum_p = createElement('p', {id: 'actors_sum', style: 'margin-bottom: 0;'}); 
	newactors.parentNode.insertBefore(actors_sum_p, newactors.nextSibling);
	
	update_sum();
	newactors.onkeyup = function() { update_sum(); }
	/*
	if (director.nextSibling.isElementContentWhitespace == true) { console.log("Finns inte i databasen!!!"); }
	else {
		//console.log(director.value + "! " + director.nextSibling.nodeValue); 
		var dir = "http://nyheter24.se/filmtipset/search.cgi?search_value="+director.value+"&field=director&S%F6k=S%F6k"; dir = dir.replace(" ", "+");
		alert(dir);
		// Undersök http://dense13.com/blog/2009/05/03/converting-string-to-slug-javascript/ för direktlänkar istf sök...
	}
	*/
}
else if (url.includes("support_stats.cgi") == true) { // Personlig statistik
	var langfilmer = document.querySelector('div[style="width: 800px"] table[cellspacing="10"] tr:nth-child(1) td:nth-child(2)').textContent.replace('Långfilmer (>60 min): ', '');
	var kortfilmer = document.querySelector('div[style="width: 800px"] table[cellspacing="10"] tr:nth-child(2) td:nth-child(2)').textContent.replace('Kortfilmer (<60 min): ', '');
	var betyg_totalt = langfilmer*1+kortfilmer*1;
	
	var artionde = document.querySelector('#bigcanvas table[width="720"] > tbody > tr:nth-child(3) > td:nth-child(1) table:nth-of-type(1) tr:nth-child(2)');
	var artionde_kolumn = document.querySelectorAll('#bigcanvas table[width="720"] > tbody > tr:nth-child(3) > td:nth-child(1) table:nth-of-type(1) tr');
	var nyckelord = document.querySelector('#bigcanvas table[width="720"] > tbody > tr:nth-child(3) > td:nth-child(1) table:nth-of-type(2) tr:nth-child(2)');
	var nyckelord_kolumn = document.querySelectorAll('#bigcanvas table[width="720"] > tbody > tr:nth-child(3) > td:nth-child(1) table:nth-of-type(2) tr');
	var land = document.querySelector('#bigcanvas table[width="720"] > tbody > tr:nth-child(3) > td:nth-child(2) table:nth-of-type(1) tr:nth-child(2)');
	var land_kolumn = document.querySelectorAll('#bigcanvas table[width="720"] > tbody > tr:nth-child(3) > td:nth-child(2) table:nth-of-type(1) tr');
	
	var artionde_rubrik = createElement('td', { style: 'font-weight: bold' }); artionde_rubrik.textContent = "Andel"; artionde.appendChild(artionde_rubrik);
	var nyckelord_rubrik = createElement('td', { style: 'font-weight: bold' }); nyckelord_rubrik.textContent = "Andel"; nyckelord.appendChild(nyckelord_rubrik);
	var land_rubrik = createElement('td', { style: 'font-weight: bold' }); land_rubrik.textContent = "Andel"; land.appendChild(land_rubrik);
	
	for (var i = 2; i<=nyckelord_kolumn.length-1; i++) {
		var antal = nyckelord_kolumn[i].childNodes[1].textContent;
		var td = createElement('td'); td.textContent = Math.round(antal / betyg_totalt * 1000)/10+"%";
		nyckelord_kolumn[i].appendChild(td);
	}
	for (var i = 2; i<=land_kolumn.length-1; i++) {
		var antal = land_kolumn[i].childNodes[1].textContent;
		var td = createElement('td'); td.textContent = Math.round(antal / betyg_totalt * 1000)/10+"%";
		land_kolumn[i].appendChild(td);
	}
	for (var i = 2; i<=artionde_kolumn.length-1; i++) {
		var antal = artionde_kolumn[i].childNodes[1].textContent;
		var td = createElement('td'); td.textContent = Math.round(antal / betyg_totalt * 1000)/10+"%";
		artionde_kolumn[i].appendChild(td);
	}
}