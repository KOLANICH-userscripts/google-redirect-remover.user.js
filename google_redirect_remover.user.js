// ==UserScript==
// @name				Google Redirect Remover
// @id					google_redirect_remover
// @namespace			google_redirect_remover

// @description			A really tiny userscript removing F***ing Google redirects from links
// @version				0.1

// @author				KOLANICH
// @copyright			KOLANICH, 2019
// @license				Unlicense
// @contributionURL		https://github.com/KOLANICH/google-redirect-remover-userscript/
// @contributionAmount	feel free to fork and contribute

// @include				https://www.google.com/search?*
// @grant				none
// @noframes			1
// @run-at				document-end
// @optimize			1
// ==/UserScript==


"use strict";
for(let l of document.querySelectorAll("a[href]")){
	let s = l.search;
	if(s && l.pathname == "/url"){
		let p = new URLSearchParams(s);
		let q = p.getAll("q"); 
		if(q){
			l.href = q[0];
		}
	}
}


