'use strict';

{
    
    createFooter();

    function describeCopyright() {
        const copyright = document.createElement('small');
        copyright.setAttribute('id', 'copyright');
        copyright.classList.add('text-white');

        copyright.textContent = "Copyright © 2021 Umebo Inc. All Rights Reserved.";

        return copyright;
    }

    function createFooter() {
        const footer = document.querySelector('footer');
        const nav = document.createElement('nav');
        const globalNav = document.createElement('ul');
        globalNav.classList.add('global-nav');

        const links = ['/portfolio/portfolio.html', '/profile/index.html'];
        const linkTexts = ['Portfolio', 'Profile'];

        for(let i = 0; i < links.length; i++) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.setAttribute('href', links[i]);
            a.textContent = linkTexts[i];
            li.appendChild(a);
            globalNav.appendChild(li);
        }

        nav.appendChild(globalNav);
        footer.appendChild(nav);
        footer.appendChild(describeCopyright());
        footer.classList.add('bg-secondary');
    }
}