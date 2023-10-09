// MST SERP Counter - SEO Free SERP Checker Tool 
// https://chrome.google.com/webstore/detail/mst-serp-counter-seo-free/dgpekiojagcbjhgfpmmngnkchekcfifn
// mstcounter.js
// 👍 wolkanca.com

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
const results = document.getElementsByClassName('yuRUbf');
*/

const results = document.querySelectorAll('.MjjYud .yuRUbf');
function mstSerpMain() {
    let countDisplay = 1;
    for (let countActual = 0; countActual < results.length; countActual++, countDisplay++) {
        // Skip if URL is invisible (PAA box, other search features)
        let height = window.getComputedStyle(results[countActual].querySelector('a h3')).height;
        if (height == "auto") {
            let height = 0;
        }
        if (height < 20) {
            countDisplay--;
            continue;
        }

        let count = countDisplay;
        let parentE = results[countActual].parentElement.parentElement.parentElement.parentElement;

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
