﻿// ==UserScript==
// @name         Filmsidor
// @description  Länka ihop Filmtipset, Imdb, Cinemageddon, Letterboxd
// @author       Lars Andersson
// @version      1.9
// @include      http://www.filmtipset.se/film/*
// @include      http://*.imdb.com/title/*
// @include      https://*.imdb.com/title/*
// @include      http://cinemageddon.net/details.php?*
// @include      https://letterboxd.com/*
// @grant        none
// ==/UserScript==

function createElement(type, attributes) {
	var node = document.createElement(type);
	for (var attr in attributes) if (attributes.hasOwnProperty(attr)) { node.setAttribute(attr, attributes[attr]); }
	return node;
}

var url = document.URL;

if (window.location.hostname == "www.filmtipset.se") {
	var imdb = document.querySelector('.rightlink a[href^="http://www.imdb.com/title/"]');
	var imdbid = imdb.getAttribute('href').replace('http://www.imdb.com/title/', '').replace('/', '');
	var cgimg = createElement('img', {src: "data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00c%00%00%00%1F%08%06%00%00%00%F3%DBs%2F%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%D2%DD~%FC%00%00%15%86IDATh%DE%D5%9Ay%94%D4%D5%95%C7%3F%F7%FD~U%D5%7B7M7%9B%CD%BE%0B%AD%A2%A8%18%8C%3A%99%11L%D4D1%93%981%93D%B28%26Q%5C%933%C6Q%E32%EAD%1DM%CCL%A2%8Cc%14%E3%88%12b%5C%C6%85%B8%A0%08%B2v%B3%B4%D0%80%D0%0D%BD%EF%5D%D5%D5U%F5%FB%BDw%E7%8F%EAF%10%A3%24q%92%E3%3B%A7N%D5%B9%F5%DE%7D%CB%F7%DD%FDI%B8%18%F5%86N%E1%BAg%86%E9%0Cy3%B8%E8%B3%12%DDV%AB%FF%3Dn%04%0B%F3%0C%9E%B3X%84R%E0e%E0xU%92%9E!%2F%15%B0%E53wr%CE%9A%DD%94%7B%86%F3E%98%99%1F%E5%A4%7F8%85%91%FF%F1M4H!F%F8%A3%9BS%88D%8D%7D%C7~%C6%3B%FD%DA%EA%25%E9x%DB%D7%E7L%12%EF%C5%EB5%BC%F7w%E8%95%BF%06%11(%88%C1%CE%3Bax%09%84a%96%F6%17h%1F4%8B%1Ey%3F%C9n0%B7%14%EF%82Z%88%0D%1D%18%9E%EDn%D4%08%DAY%CB%0D%E7%C4%DDv%3D)z%FDC%FA%F2)%B7%98o_%F7%3Fx%12%C5*%14%03O%03%C7%03%81B%9ED%D8%B9%B3%95%CF%AF%D9M%93%11%0A%ACC%8F%1E%C51%C3%8A%199%24%0F%C5%20%AA%7F%DAn%8D%08%99%94%F3%A6%17%AE%D5_%5Cu%DCW%7B3%B1%CB%5E%DA%AA%C1%CDK1%F9%B9%1F%B2%FD%BFL%D3%0F%F8%FCq%FD%04%08%FB%C1f%0E%DB%8B%11%14%8B%10%E9%AC%96%9B.%08%D8%16%9C89%DE%EFf%FF%F4%25c%7F%BC%94!~%3E%2FX%C7%A9%40%1A%88%00%B5%C0%DFY%CB%5E%20_%C1%9E6%95%F9SF0%3E%1D%E0%CA%0A%91%3Fw%BF%9E%2F%A4%DBzYp%EC%0E%AE%BB%F8%C4%DB%80S~%F6%B2%D8%97%AA1%7F%5D%2C%3E%06%2C%07%C0%D0d%C3a7%CB%00%88(N%8C%D1%A6M%BA%FCj7%EE%82y'%3CU%18s%F3%CF%3B%C1%FC%964s%80%94u%C4%80Z%A7%CC%23B%FD%DA%3D%F8%40j%D1%99%5C~%F2DN%8C%A7%B0N1%C5y%1F%C7%9A%15%2Fj%C46%D4%DB%EB%3F%9F%C9%AF%9C6%FE%96%F6%B8%E6%3E%5D%25%7F)u%F4%FF%A8%E8%3C%C8%00%5D5%83%8A%F9P0%B2%22%E2P%11q%0D%1Bt%C9e%E6%A8%AF%7F%E1%F8%E7%3A%7B%DC%A71%26%14%8F%9Ch.%3B%9Dc%9E%40%1DJ47Bx%EF%3Fp%D7y%C7%F3%F7%EDq%AC%08F%80%E2%9C%8FK9%3B%2Cx%B9%A9%CD%EE%A6%AF%8D%FD%5B%F0.pN%DD%C1k%FEd%82%91%BDM%DA%B1%F1p5u%A8%BEV%AC%8A%E4%B4%AD%E3%D6%0B%7Dy%A4%F68%FBj%B5%F3%7B%93f%E7s%1B%98%1F)%A4%CE%08%B10I%E6%A2S%B8%FBks%F9%DE%FENB%11%BC%20%24L%A4%E9-%2B%CC%82%FDq%5C%60%CF%13%C2%9E%14%0Bf%B6q%FA%C9%93.%B7%8E%12c%3E%E1%A2%A1%9A%3D%F5%8E%F5%03%E0%98%0F%06%03%C0%18%25p%22%C5%3Dk%E5%9Eo%C4%BCe%7B%8F%E5%C4%EB%DD%95%E7%DCc%F6%3C%F6%0A9~%94%B4*w%ABrUw%92%C0*%9Es%E8%A6%3A%B6%F4g%0E%80%A1%1F%0B%1A(N0%F4%EFr%97%9F%5B~%22%C8%3C%F4%13.%1D%EA%C0%03%ED%DD%01%99%AE%010%F4%83%C18%00%88%15)%E9y%9B%DB.%CAc%CC%94%CA%BB%C1%1D%FD%83'L%AA%B5%8B%7B%22%3EW%85%8E%40%04%3F%B4%D8%D7%B6%B3%AA%B3%8F%E6%A2%5C%F2%0Bb%A0a%F6%02%7C%1C%CDx%82%EDM%EB%DFM%8E3q%DC%A8%2FYG%84O%B4%E5P%F0%0C%24%DA%D1%8E%AA%F7%00%FA%B0%1Bf%8C%12Z%91%A2%EE%D5%EE%A5%9B%0A%A7%9E4k%E6%C3%DF9%CD-%1E6%DC%5C%D9%9F%26%F4%0C%11%20%B3x%25%BF%DA%DB%CE.%20%BF%20%8A).%02%C9%07%CF%03%EB%FE%3Ci%3E0%DEG%8A%8A%F7q%E1%DF%94%9E%09%CCD%B0%7C%3C%9A%F0%AFd7%0CX%A0e%D5%7B%9B%FD(q%1F%00%C4D%9B%DFr%2F%DDX4%BB%2B6%F3%9Bk%AA%9C%CD%CD%17_%7C2%3F%5C%CA5%ABw%B1%CA7%94%02AW%3F%EE%BB%0F%C1%E2%FF%85%AE%24%1A%CDE%9D%FB%E3%5CQ%EB%C09%F0%7C4%9A%87%1AO%D9%D9%84%FC%EC%D1N%5EYU%1B%07%8AQ%F5%3E%D9%1En%D6%C5%D5%CE%EAC%8C%BA%FF%91j%22%AB%B2Lq%F7%5B%EE%87_%9Ckoxl%86%EFG%B6%05%8B%DF%90o.%5D%AB%ABc%11.L%07%F4%97%172a%CA%08%8A%B7%EE%87%D7w%88%FC%E7%AB%CA%AD%0B%E0%B3'%40%90%FAp%C5%E24%BB%3E%DFC%A3%B9%80%20%AD%ED%C8%0B%5B%E0%F15%A4%DF%AC%A53%91%A6%0E%D2%2F%88%90P%25%0A%F4%7F%A2%0D%B9%01%E2u%87%18q%FF%88%C6%19%25%08%C5%8CL%AD%D2%3B%BE~2%9F%F9A%E9%EA%CD%BB%3B7G%3C9%25%1D%E8Q9Q%7F%E6%98%E19%D3SbL%A8%FD%8C.%0E%D8%D7-u%E7%DE%AB%05%3F%FFG%86%5E2%2F%0B%C8%C1%8E%D0%20%00%9E%81H%14%C5G%D2%7D%C8%5B%9B%E1%89%B7q%CFV%D3%D5%D0E%B3%40%9BB%DC3%B4%AA%D2%A1J%0A%B0%3A%C0%03%CD~%7F%A2t%96%BA%2C%18%BD%3B%20%D9%02y%C3%C1%D9%23%03%23kv%14%7C%CC%DAUk%A9%D9%2BI%11%CE%F7%8C%9E%F1%BD%F9%F9s%BFvFQd%F8%90%A8Z%89%B1%BB%7B%08%0F%BF%9Eb%DD%F3%DB%BA%D5%85%B5%97%3E%C2%F1%C5y%0C%BD%F0T4%DD%9F%15%10%11%88%F8(Qp%19%A4%A6%1Ey%BA%0A%9EZK_%F5%3EZ%AC%A3%19%E86B%9F%08%7DN%E9%B0%8E%3D%C0f%11%9AQB%01%FC(%10%85%88%F9%04%9At%05%22%0E%8C9%20%1D%FE%11%8F3h%7F%3A_%AE%5E%1A%B6%846%9D%C8%8Fq%D1%93%DF%93%C9%9F%3D5%A5%AE%AFO%8D%CD%5E%CE%A3F%C2%19%DF%9D%CC%DC%99%A7%1F%FB%9D%3BWn1%1A%D4%5E%BF%8CSN%9F%262%B2%DC%E0%24%7B)%1AZ%90%176%5B%96%AD7%C1%1B%B5%B4'R%DA%0A%A6%DD%18%12%BE%B1%09%A7%D2%25%C64%ABj%23h%831%D2%08%B4%88%10%B7%16Q%D4%DB%D3%22%24%FA!%08A%D59%1112%18TiV%F4%C4%1Cb%16%C59%E7%40%F0%DE%17%AF%A8*%0A%22r8%DD%88%E8%A1jU%05U%8C1%87%D1UU%8D%88%C8AcTU%9C%AAz%03k%B1N%11%05%13%13d%CF%5Eq%91%84%CB%89y*%E1C%1Fm%08%AD%83h%81%B0%7Cc9%0B%FE%ADu%3D%20w%7C%89%13~%F8%F7%B8%FE.%C43%C8%600%E6%1C%B8%40%C9%990%9E%AB%97%8C%08%96%3F%B7%BA7%E5%24%FF%CAy%E4%7Ck%AE%F2%BBM%B0%7C%03%99%15%EF%D0%D1%17J%8B%A0%AD%0A%DD%22%F4%A9%D2%0B4%89H%B3%AA6%00%FB%816%A0%EB%90%BC%C1%1F%08l%0Fv%A7E%40%10%DC%FB%7Clc%84%2CNGf%FF%DF%CF7K%93%AC%AE%D0%C3%FB%8A%08%EA%F4%90C%1D%C4w%B0%BF1%82s%03%1E%9418%E7%98%3D%7B%F6%11J%86%02~%0E%2Bwxi%A0%A7%A2Tf%FE%E3%A7%14%FA%90%887%B0%B6%81%E9%3D%03%125%D0%B0%87%CB%E7%0D%8B%BC%F0fI%BE%89w'%7F%F1F~lc%DF%D1%B2e%9F%D3PMf%DC%F4%80%1D5%9B%BD1c%C6L%C9%CD%CB%D7%BA%BA%FA%CE%09%13%26%F8%B9%B9%B9f%C3%86%0D%BF%8CF%A3'%CF%9A5%EB%C7---M%C9d%B2%AF%A4%A4%24%9A%C9dTD%08%82%C0%C5%E3%F1dYyy%01%40*%95%0A%EA%F6%EE%7D%B8%7C%D8%B0%CF%0F%1D%3A%F4(%40%DB%DB%DA%F6%F6%F4%F44M%9A0%E1%14%1B%86%A1%E7%FB%92%EAO%A5%EB%EB%EB~%9E%93%93s%EC%8C%A3%8F%FE%B2%08%81%B5V%23%11%DFkniM%04A%D8WRR%12%1B%98G2%99%20%EC%ED%EDNN%9B%3Au%AC%B5%D6Yk%5D%2C%16%8B%D6%EE%DC%B9!%93%C9h%E5%CC%99'g2%99%94sN%A3%D1hd%D7%EE%DDo%B5%B7w%3C%3Df%CC%E8%CBG%8D%1CY%91N%A73999%91%3D%7B%EB%AA%9B%9B%9B%B7%9Fp%FC%AC%2F%8B%08%1B6V%FD%B4%B0%A8%60%E6%B1%95%95g777%EF%DD%B5%FB%DDE%40%17%E1C%E8%87%7FD3%0F%E2%F4%C9R%9D7%7Bx%1BP%7D%F6%B1%F2%91c%82%07Q%7Dr%B4%9E%7D%EA%F8%B4%07%3D%BFx%E0%01UU%0D%C3P%AD%B5%AA%AA%BAp%E1%C5%FA%FB%DF%BF%A2%AA%AA%E7%9E%7B%AEn%DA%B4%C9%0D%FC%DE3%7D%FA%F4%1AU%D5%C7%1F%7F%DC-%5B%B6LUU%83%20PU%D5%FA%FAz%BD%E1%86%1Bt%A0%B9%D6%D6V5%C6T%2F_%BE%3C5H%BC%ED%D6%5B%F5%AE%9F%FC%C4%0D%CE%A9%AANUu%D6%ACY%CD%3F%FA%E7k%13YzF%83%20TU%D5%07%1F%7C%40%97-%7D%2C%3BO%26%CB%A6%A1%A1A%2FXp~v%12%17%1CX%F7%9B%AF%AF%D0%0B%16%9C%A7%AA%AA%D6%A6%D5%DA%2C%8F%95%AF%BEd%8F%1A5%B2%AD%B5%B9%5E%0F%9AWk%B7ovc%C7%8C%EEmh%A8s%AA%AA%9F%3E%F5S%B5s%E6%9CT%AB%AA%BA%E4%D1%87%15%985g%CE%9C%23K%2B%88%20%B8(%9E'%05%13%CB%99%1E%F5%B3%12%F0a%82%AE%02%B8%04%05%91P%2C0%7D%EAT%00%96%2CyTW%ACXa%01%3By%F2%14U%1D%F4%89p%9A%D5%1Dn%D1%A2E%A3%0B%0B%0B'%0C%D0%9C%AA%86%40XUU%15%BE%FC%F2%CB%99%15%2BV%04%E9t%3A%04B%E7%9C-%2F%2F%0F%E7%CC%993m%E2%C4%89%1E%10%02%A1%1F%89%D8%CAc%8Eq%40%B8d%C9%92p%D3%C6%8D%16%08'N%9C4l%EC%B8%09%B9%80%7D%F6%E9%E5%C1%BF%DEzS%FC%97%3F%FFi%FC%D9g~%97%8CD%A2!%10nZ%FFv%F8%D2%F3OgV%BC%F8%5C%98J%F5%5B%C06%EF%AF%B7%8F%FC%F7b%8BM%DAq%E3'%D8%E2%E2b%0B%D8%FA%3D%EF%DA%25%BFz%C8B%60%2BF%8F%D5%C9S%A6%96%95%0F%1Fe%BB%DA%1A%EC%23%0F%2F%B6%FD%F1%0E%3Bv%DC%047%A4th~%26%99p%80%5D%B4%E8%F2%F1%B1ht%0C%E0%9C%0D%1D%60T%F5%C8%C0P%CD%FA%C5C%8Bss%A2%1E%91%86.4%9E%02O%FE0%20%02%EA%02%D8%D7%DA%D7%03%ECw%CE%02p%FF%FD%3F%EF%7F%F8%E1%87C%C0knn%16%9356%02%18%CF%F3%0C%60N%3B%ED4s%CE9%E7%C4%06h%9E%B5%D6%07%FC%9Bo%BE9%987o%DE%F6%85%0B%17%EE%E8%E9%E9%09%00%3F%0CC%1F%F0%CF%3B%EF%BC%C8%88%11%23%FC%01w%DD%07%3C%E7%9C%01%FC%3B%EE%B8%23%F3%C6%9Bo%02%F8%D69%82x%93%80%F5%FE%E7%F1G37%FE%F8%D6%B5%97_u%CD%C6%A7%7F%F7%EC%BE%08%09%1F%FA%FC%9Bn%BA13%FF%EC%F3%B6%7F%7D%E1w%AA%BB%3B%DBz%A1%C7%DB%B1u%8D%5C%B6%E8%CAt%A6%A7%DE%A3%BF%C9%0B%D3%BD%1E%F4z%D5%EB%5E%97%2B%AF%BE6M%AA%D1%D3d%A3%17%A6%13J%D0%EC5%D5m%F3%BE%FB%FDE%A9%AE%E6Z%CFK5y.L%89%17vz%04%FB%BD%F9%A7%1F%E3%7D%E6%B4%D9Qh5%9E%8D%9B%3F%98(%3C%3C%25%A18%07%C4%FA%A8%9C2%04%CF%A0%AD%BD%C8%CAZTr%20%B4%87%8F%0B%9D%E2%C7%D0m-%8Eu%B5%89%AD%40%E3%60%24P%5E%5E%DE%F5%F8%E3%8F%FF%A6%B8%B8x%C5%7D%F7%DD%B7%AB%A8%A8%E8%B0z%91%E7yr%E9%A5%97%1E%F0f%3C%CF%03%E0%F6%DBo%CFy%E7%9Dw*%CF%3F%FF%FC%09%BD%BD%BD%F2%9E1%85%AF%7C%E5%2B2d%C8%10%C20%3C%D8%D0%0A%C0%9C9s%A2%A3G%8F6%D9%5CWDLr%AF%90~%8DI%23%A2%F9%CF-%BE%F6o%AB%9E%FD%D7%D3%AF%F9%D6%D9S%FB%5B%B6B%F7%EB%DCy%E5Y%B95%2F%DCq%CC%82%F9'%8E%EB%EDn%0BH%BE%8D%9F%D8%A5%91%88g%B5%7D%03%D2%B5%19IwB%E2-%FC%E4%1E%F5%3D%B1%B4%ADC%BA%B7%22aBh_%0B%5D%5B%89F%7Ck%BA%B7%20%1D%EB%11%DB%2Ftn%86%B6%B5%E4%25%B7%CA%3F-%98%09%AD%AB!%BE%E7%80%CF%EA%FF!%EF%09%20%E2%83%1F%03%17%C0%DE%DA8%BD-%FB4%1A%15%09R%DAz%D3o(9u*%D1%E2%02%08%FA%0F%3D%CDH%04%87%8F%B9ui%22%11%04%BA%01%98r%D0%DF%5D%C0k%C9dr%3AP%7C%B0%2Bj%06%5C%BFD%22Aii%E9%01%FA%60%9F%D1%A3GKQQ%11eee~OO%0F%00%7B%F6%ECa%F4%E8%D1TTT%90L%26%D9%BD%7B7%95%95%95%87%F0%5B%BCx%B1%3F%E8%3Dy~%14z%B6C%C3%2B%C4%82%06N%9E0%9C%A1S%F3%98%3C*%C0vn%83F%A8%88%F6IIi%01e%B9%FD%D1%ED%E9D%9A%A6W%D0%CE%9D%60%D3h%EB*%B4%3B%85%F6%B7%40%E3%ABhw%0D%D8%14%B4%BC%81%B6w%A3A%2F4%AFD%3BZ%C1%A5%D1%B6%B7%D10%17%0D%FA%90%8E%F5%04%E4%91%0ABJcQ%A1-%8A%F6%EC8p%F3%FD%83%A5%C0%0DD%C4%D1%DCl%1D%BB%BD%1D~%FF6%FCv%23%AC%DF%83%8B%F9m%26%E3hh%E8dkC'c%16%DC%C7%F4%9F%5D%04G%8F%83%81l%91%8A%22%ED%1D%98k%9E%C0-%7D%DB%AE%8AE%BC%F1A%C0%A7%06%5D%B9%CE%CE%CE%82%B3%CE%3A%EB%E6%7B%EF%BDw%F8m%B7%DD%A6%F1x%1C%40T%95X%2CFcc%23%CF%3C%F3%0C%97%5Cr%C9%7B%92%16%86%0A%C8W%BF%FA%D5%BEg%9Eyf%0B%C0%B7%BF%FD%EDJ%20%BAm%DB6%8DD%222~%FCx%EA%EA%EA%A8%AA%AA%A2%B2%B2%12%E7%DC%01%F7u%E9%D2%A5%1Cs%CC1%CC%981%03E%B0%5D%B5%D0%93%C3%9B%EB%B6%07%9B%B6%EC%60%D9%7D%D3%22%E9%E6%FD%D8%E2%A8%D2%DB%23%17%FD%A0%26%F1%FC%86%9E*%201wz%C1q4%BCN%D8%D1E%10Z%A4%F5m%B47%84T%1B%B4%AC%24%ECl'%08B%A1%E5-%B4%23%0D%99%5Eh%5D%05%1DI2%81%13%D7%BA%1E%82%08.%E8%23'%BE%91%5D%FBB%D6%ECJr%F1%FC%A1J%DC%08%BD%1D%EFI%86%1D(%04%F9%11%D4%8F%226%0DolE%96o%84%D7%B7C%7B%02%8Asq3*0%7B%DBe%CF%B6z%AD%11%A1%00e%DF%AB%EF%A0%9F%BD%87%A3%3F%3D%05*%2B%20'%82%ECjE%9F%AD%92%CE%BD%EDZ%03%E4%CD%AF%D43%22%86X%DA%8A%02r%F2%C9'WL%9B6M%A6N%9D%AA%D3%A7O%D7t%3A%7D%40%02%82%20%20%1A%8D%F2%C0%03%0F%D8%0B.%B8%C0%2B%2B%2B%C3Z%7B%402%CE%3C%F3%CC%E8%B0a%C3%26%F6%F6%F6%FA%B1X%2C%07%D0%A6%A6%26b%B1%98%8E%1F%3F%9E%0D%1B6%D0%D0%90%AD-%5Bk%07U%96%DC~%FB%ED%A9%2B%16-%8A%CC%981%C3%B3V%D5Ow%2B%CD%9B%CC%ACQ%7D%12%F5%05Z%AB!%15%AA%F3%81%E6%26%CE%9C%96%8E%0D%CFcr2%83%D7%9EH%96%D0%5C%CD%08%DF%9Ao%9D%E6%F2%B5%A7Fm%AFb%82%10%9A%AB%19%93c%CD%C2O%DB%3C%ED%DA%AA%AEG%F15%80%B6-%14%86%CA%25g%B8%BCXj%87f%3A%05%E3%D2d%3A%B7c%FA%E1%3F%9F%0E%ED%17g6y%85%85h%98%D0%03Q%A6%1F%C9C%05d%7F3%F2l5%FCz5%F1m%0D%B8%F2%22%8AG%14%C3%D8%A1%D8%8AR%BC-%FBY%5B%5D%AF%2F%19%C3%08%E7%18%1A%F3)%9BQ%C10%23%F4%BERC%F8%BF%D5%98%BE%0C%3D%E9%90%FD%A0A%C4%F7F%5D9%9F%89%17%7FZ%BD%1F%FD%1A%ED%ED%C9%EA%F8%7B%EE%B9%E7%80%CA%88%C7%E32h%0F%7C%DFGD(..f%F3%E6%CD%EDK%96%2C)%BD%E2%8A%2B%A2%C6%18%A2%D1(%00%97%5Ezi%C4%F7%FD%F2%7D%FB%F6%F1%E0%83%0F%02%90%C9d%A8%AA%AA%E2s%9F%FB%1C%ABV%AD%D2%8A%8A%0A%19%E47%C8%3B77%97XN%CE%40%C5%D9%D0%19G%A0%9F%5B%BE%E1%7C%01p%FD%E4%C4%90X%0E%10%09%F8%FE%17%89%F8%F9%0Col%81%CB%EEw%E0%F53m%02r%CF%D1%88%D8%14AW6%03N%A4%9F%E3%A6%C1q%C7e%E9%B6%19%E2I%08I1%A6%02%FE%FD2%3C%C9%A4%E9%E9%82%C0%A2%D1%9C%B4%94%C6%60%DD%BB%B4-%5Bc%CB%BEq!%11%CF7%07l%B7%FF%F4j%E4%F9%CD%B8g%AB%E9n%EA%E6%DD%E2%5C%22s'3%A3%AC%10r%A3%84%D3G%E2o%AA%E3%B9%D7%B6s%97g%F0%ADcDa%0E%A7%CD%AC%E0tU%A2%DD%FD%A2C%87%E4%C7%FA3.%B0%BD%CE%8E%1D%12%19%3B%BF%D2%1Bv%C9%196%3Act%9F%EE%DA%A7%1C3%0EY%7C%F7U%D4T%BF%8D1%1E%C9%0C%A4%FB%7B%BB%1F%5B%B2%24%D1%D8%D88%7C%DD%BAu%F2%CE%3B%EF%F4%DFr%CB-%94%94%94x%CE%B9%F5w%DDu%D7%98%E6%E6%E6%99%1B7n%EC%2B))%89%D6%D4%D4%F8%F1x%5C%7D%DF%D7%AE%AE.%AA%AB%ABmQQQ%E4%C5%17_%ECokk%0BrssK%9E%7F%FE%F9%A6%89%13'%E6%E7%E7%E7%17%BD%FC%F2%CB%E9-%5B%B6Huu%B5___%DF%FD%E4%93O%E6%B7%B6%B6%14%D4%D6l%DA%FB%DAN%E2M%FDnzh%09%9C%22%F91d%C3%5E%C2%F2B%225%7B%F1%E3)%D47hO%12%DDVO%E6%C6G%C9%0D-%1AZ%B40%17%B3%B2%96%9E%9D%CD%B8%5B%1F%A5%B4%2F%8Du%0E%0Ar0o%EE%A4mC%1D%BB%17%FE%82%E3'%96%13%EDK%E3%0Ar0U%F5%F4%ECh%A2%F9%BA%C7%18%17Z%1C%F0%F6%CD%BFe%EA%F6F%26o%ACc%1F%D0%E1%B2%B9%18v%A0t)%EC%1B3%94%E1gU2%B7%AC%10SV%408%7B%3C%FE%CA%1D%2C%B9~%19%D7%18!tJr%5C%19%A7~~%16%F7%BF%DB%C6%C8%ED%8D%A4%C7%0F%93!%8F%5E9%C6%EBN%E7%E0i%8A%D1E%09b9%094%95%D60%8D%24%D2%B0%AD%116%BE%0B%EF6%80%17A%9B%C2%A1%B2lu%7CK%26%93%F9%2F%11rT%F1%80%BE%81%18%A1Q%84%B8%88%8CuN%87%0C%A4Ar%00%EF%A0T%99%3B%E8%3B-%82Q%05%11%92%AA%14%02%B1%01%5E%02%A4DH%0D%D0%FB%06%12%8D%F9%0A%E5%07%15%A8%06S-%07%CF%E3%80P%04U%25v%D0%DC)%20!B%EE%00%CF%C18%A9%17%D8%2FBT%951%03%BC%1C%90%04%DAD%F0U%C9%07%EAE%E8%07%C6eSg%DE%1A%E7%EC%B6%D9%B3g%5B%DF7l%0F%2C%8D%D3Gq%D4%C5%A72%B7%A2%143%AC%88%60%FAH%22%BF%DD%C8%2F%AF_%C6%3F%8D%2B%23z%D2%042%F5%1D%8C%BDy%017%AE%DEE%E9%B6%FD%C4%E3)rg%8FSox~%1De%1Ex%26%1B%5B%A4S%881%D9%1C%5Da%0E%1C%3B%1A%26%0D7(%1E%D6Z)*H%EB%D5_%99%5By%D1%5D%EF%5E%B8cW%DD%A2%9CXtw%3A%13%E6%18%23%19UI9%17%AA*%D5%18%DF%A0j%04%0C%92%7D%A6c%24%BBy%E7%9CAL%E8%9CSE%3D1~%A8.%14D%7C%11OU%AD%08%02%22%81%3AkD%8C%87%98%B4%AA%0D%C0%C5%0E%3A%F4%C1C6r%A8%AB%3F%10%88b%E4%3D%D0t%E0!%9F%AA%12%7D%1F%3D%AD%90%1E%00.v%D0%7F%19%85%CC%40%0D%06%A0_%B3%2F%04%AA%B2%60i%DF%E0e%F0%03%CB%ABs%262%E9%C6%F3%F8%DC%C8bLq%1E%C1%C8b%22%1B%EA%B8%FF%C5%AD%5C%F6%D4%F7%F1%CF%9EE%A6'%C3%C8T%1F%FF%B5%BB%8D1%7B%DA%E8N%85%E4%87%0E%EF%B4)%80%15%82%00%9C%C9%DAZ%DF%D3C%92d%F9Q%C8%8F%3At%E0%02%3A%9B%90%13%0AW%BAU%FF6w%CE%85w%15.Y%F1%D6%D6%8B%22%BE%AC%0BB%E7%97%E6%13%1A%81%BE%B4%26%7C%2F%3C%84O%3A%80t%F8%DE%C3%BC%FC%98%3B(u%1E%BCOp%0Es%D8%07%3E%FF%EF-q%84%FD%E2%00%26%92K_*C%5E%5E%1E%F2%85%E3%F9%E7%9F%7C%99%7F%19Z%40n%D4'%8C%F9%F8%BE%E1%FE%8E%04%97%15%97%10%89D%09l%92%11%AA%3C%D2%DC%C3%F8g7%D1%B3%A2%86%F2%F5%7BIy%C2%B057PR%5E%84%86!r%E45%05%C1Z%F0%7D%B5%3A%7C%B6%F7%DD%87%FC%AE%07%9EZ%F3-%E07%93%86%E1%3D%F5%7D%EC%D1%A3%A0-%8Ex%06%0D%1D%94%17%C2%9D%CF%C1%0D%CB%B3%EEw%5E%14%D6%FC%0B%8C(%86%CC%9F%FE%D6V%3E%A0Z%F0%17%7C%CCf1%F3%9E%80%D1_%20%A2%09%FC%C7.%E1%BA%98O%AE%825%82%0F%DC%E7%94%2B%86%16%E1%87%19%82t%8AQ%BE%C7%AF%AC%A5%A2%AD%97%86%96%5EJ%F6u%D2%5D%D7N%EF%17g3%BE%BC%04%82%CC%1F%FB%C8Y%B3%0F%16%ACx4%ACw%BF%5C8e%C8%D4%8A3%9E%F8%C1%FDo%FDhWk%E6%EE%2F%FD%07%E6%F1Kq%C7OB5%C8%06%A1~1%14%E6%BEW%25%04(%2F%86%D2%92%ECk%94%3F%11%8C%BF%5E%1D%5D%C8%BE%2C%2C-%82%92%18%A8%87%1F%8B%10EI%1B!%06%2C%06%AE%00%7Cg%09%8D0%C4x%3C(pT%3AdoG%82hM%23%DDU%F5t%02%E3N%99D%04%1F%D54%F2%A7%D4%3D%8DQ%14c%D2%FBj%DDU%F3%FAeD%E9%19w~%F3%B6%D7%CAj%9B3%B7%9C%F7S%D2%BF%BF%96p%F2H%5C%26%00%3F%CCJ%40%C4%83%13%C6!%BE%07%A2Y3%3D%F0%0A%5D%3F%E2%D6%7F%D0%E1%FF%99%AF%CA%FF%0C%5E%A2%E0%C0xy%3AX%81%F8%3F3%13%98%14%80%C1%B6%D6%00%00%00%00IEND%AEB%60%82"});
	var cg = createElement('a', {href: 'http://cinemageddon.net/browse.php?search=' + imdbid, target: '_blank', rel: 'noopener noreferrer', style: 'display: block; margin: 0.5em auto;'});
	var lb = createElement('a', {href: 'http://letterboxd.com/imdb/' + imdbid, target: '_blank', rel: 'noopener noreferrer', style: 'display: block; margin: 0.5em auto;'});
	var lbimg = createElement('img', {src: 'https://a.ltrbxd.com/logos/letterboxd-decal.svg', width: '50'});
	cg.appendChild(cgimg); lb.appendChild(lbimg);
	imdb.parentNode.insertBefore(lb, imdb.nextSibling);
	imdb.parentNode.insertBefore(cg, imdb.nextSibling);
}

else if (window.location.hostname == "www.imdb.com" || window.location.hostname == "akas.imdb.com") {
	var sidebar = document.getElementById('sidebar');
	var imdbid = document.querySelector('meta[property="pageId"]').getAttribute("content");
	var ftlink = createElement('a', {href: 'http://www.filmtipset.se/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); ftlink.textContent = 'Filmtipset';
	var cglink = createElement('a', {href: 'http://cinemageddon.net/browse.php?search=' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); cglink.textContent = 'Cinemageddon';
	var lblink = createElement('a', {href: 'http://letterboxd.com/imdb/' + imdbid, target: '_blank', rel: 'noopener noreferrer'}); lblink.textContent = 'Letterboxd';
	var sbdiv = createElement('div', {class: 'mini-article'}); var br1 = createElement('br'); var br2 = createElement('br');
	sbdiv.appendChild(ftlink); sbdiv.appendChild(br1);
	sbdiv.appendChild(cglink); sbdiv.appendChild(br2);
	sbdiv.appendChild(lblink);
	sidebar.insertBefore(sbdiv,sidebar.firstChild);
}

else if (window.location.hostname == "cinemageddon.net") {
	document.title = document.title.replace(' torrent details for ', ' ');
	if (document.querySelector('#altlist_row + tr + tr td.rowhead').textContent == "Note") {
		var imdb = document.querySelectorAll('#altlist_row + tr + tr + tr a[href^="http://www.imdb.com/title/"]'); }
	else { var imdb = document.querySelectorAll('#altlist_row + tr + tr a[href^="http://www.imdb.com/title/"]'); }
	if ( imdb[0].textContent != "" ) {
		for (var i=0; i<=imdb.length-1; i++) {
			var ft = createElement('a', {href: 'http://www.filmtipset.se/' + imdb[i].textContent, target: '_blank', rel: 'noopener noreferrer'});
			var lb = createElement('a', {href: 'http://letterboxd.com/imdb/' + imdb[i].textContent, target: '_blank', rel: 'noopener noreferrer'});
			ft.textContent = ' (ft)';
			lb.textContent = ' (lb)';
			imdb[i].parentNode.insertBefore(ft, imdb[i].nextSibling);
			imdb[i].parentNode.insertBefore(lb, imdb[i].nextSibling);
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
	var ftlink = createElement('a', {href: 'http://www.filmtipset.se/' + imdb, class: 'micro-button'}); ftlink.textContent = "Filmtipset";
	flag.insertAdjacentElement('beforebegin',ftlink);
}