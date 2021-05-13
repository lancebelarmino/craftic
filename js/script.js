/*** Navigation ***/
const hamburgerMenu = document.querySelector('.hamburger-menu');
const activeHamburgerMenu = document.querySelector('.hamburger-menu--open');
const headerNav = document.querySelector('.header__nav');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu--open');
    document.body.classList.toggle('disable-scroll');
    if (headerNav.classList.contains('header__nav--active')) {
        headerNav.classList.remove('fadeIn');
        headerNav.classList.add('fadeOut');
        
    } else {
        headerNav.classList.remove('fadeOut');
        headerNav.classList.add('fadeIn');
    }
    headerNav.classList.toggle('header__nav--active');
});