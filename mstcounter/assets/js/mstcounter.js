// MST SERP Counter - SEO Free SERP Checker Tool 
// https://chrome.google.com/webstore/detail/mst-serp-counter-seo-free/dgpekiojagcbjhgfpmmngnkchekcfifn
// mstcounter.js
// 👍 https://wolkanca.com/chrome-serp-counter-uzantisi/

function ok() {
	const tags = [...document.querySelectorAll('.ok .serpcounter')];
	const texts = new Set(tags.map(x => x.innerHTML));
	tags.forEach(tag => {
		if (texts.has(tag.innerHTML)) {
			texts.delete(tag.innerHTML);
		} else {
			tag.remove()
		}
	});
}

/*
const search = document.querySelectorAll('#search')
const botstuff = document.querySelectorAll('#botstuff')
const yuRUbf = document.getElementsByClassName('yuRUbf');
*/

const results = document.getElementsByClassName('MjjYud');

function mstSerpMain() {
	let countDisplay = 1;
	for (let countActual = 0; countActual < results.length; countActual++, countDisplay++) {
		let count = countDisplay;
		let parentE = results[countActual];
		let counter = document.createElement('div');
		counter.className = 'serpcounter';
		counter.prepend(count);
		parentE.prepend(counter);
		parentE.classList.add("ok");
	}
	return ok();
}

setTimeout(() => {
	mstSerpMain();
}, 750);

document.addEventListener("scrollend", (event) => {
	mstSerpMain();
});
