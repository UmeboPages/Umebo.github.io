'use strict';

const header = document.querySelector('header');
const nav = document.createElement('nav');
const globalNav = document.createElement('ul');
globalNav.classList.add('global-nav');

const links = ['/portfolio/portfolio.html', '/profile/index.html'];
const linkTexts = ['Portfolio', 'Profile'];

for(let i = 0; i < links.length; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href', links[i]);
    a.classList.add('text-dark');
    a.textContent = linkTexts[i];
    li.appendChild(a);
    globalNav.appendChild(li);
}

nav.appendChild(globalNav);
header.appendChild(nav);
header.classList.add('bg-white');