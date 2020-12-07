/* eslint-disable no-plusplus */
const topnav = document.getElementById('topnav');
const topnavToggle = topnav.querySelector('.menu-toggle');

function openMobileNavbar() {
  topnav.classList.add('opened');
  topnavToggle.setAttribute('aria-label', 'Close navigation menu.');
}

function closeMobileNavbar() {
  topnav.classList.remove('opened');
  topnavToggle.setAttribute('aria-label', 'Open navigation menu.');
}

topnavToggle.addEventListener('click', () => {
  if (topnav.classList.contains('opened')) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const topnavMenu = topnav.querySelector('.nav-menu');
const topnavLinks = topnav.querySelector('.nav-links');

topnavLinks.addEventListener('click', (clickEvent) => {
  clickEvent.stopPropagation();
});

topnavMenu.addEventListener('click', closeMobileNavbar);

const nav = document.getElementById('topnav');
const aTag = nav.getElementsByTagName('a');
const medQuery = window.matchMedia('(max-width:576px)');
const barMenu = nav.querySelector('.menu-toggle');
const logo = nav.querySelector('.logo');
let i;

logo.style.background = '#fff';
for (i = 0; i < aTag.length; i++) {
  aTag[i].style.color = '#fff';
}

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    nav.style.background = '#fff';
    nav.style.boxShadow = '0 6px 5px -2px gray';
    logo.style.background = 'transparent';
    barMenu.style.background = '#000';

    for (i = 0; i < aTag.length; i++) {
      aTag[i].style.color = '#000';
    }
  } else {
    nav.style.background = 'transparent';
    nav.style.boxShadow = 'none';
    barMenu.style.background = 'transparent';

    if (medQuery.matches) {
      for (i = 0; i < aTag.length; i++) {
        aTag[i].style.color = '#000';
      }
    } else {
      logo.style.background = '#fff';
      for (i = 0; i < aTag.length; i++) {
        aTag[i].style.color = '#fff';
      }
    }
  }
};
