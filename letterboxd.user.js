// ==UserScript==
// @name         Letterboxd
// @description  Ta bort skräp ur titlar
// @author       Lars Andersson
// @version      1.0
// @include      *://letterboxd.com/actor/*
// @include      *://letterboxd.com/director/*
// @include      *://letterboxd.com/writer/*
// @grant        none
// ==/UserScript==

if (document.URL.includes('/actor/') == true) { document.title = document.title.replace('Films starring ', ''); }
else if (document.URL.includes('/director/') == true) { document.title = document.title.replace('Films directed by ', ''); }
else if (document.URL.includes('/writer/') == true) { document.title = document.title.replace('Films written by ', ''); }