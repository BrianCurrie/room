/***

    Nav

***/

const nav_openBtn = document.getElementsByClassName('navbar_open')[0];
const nav_closeBtn = document.getElementsByClassName('navbar_close')[0];

nav_openBtn.addEventListener('click', toggleOverlay);
nav_closeBtn.addEventListener('click', toggleOverlay);

function toggleOverlay() {
    const nav_opened = document.getElementsByClassName(
        'navbar_mobile_opened'
    )[0];
    const nav_closed = document.getElementsByClassName(
        'navbar_mobile_closed'
    )[0];
    const content_container = document.getElementsByClassName('container')[0];
    const overlay = document.getElementsByClassName('darken_overlay')[0];

    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
        nav_closed.style.display = 'flex';
        nav_opened.style.display = 'none';
        content_container.removeEventListener('click', toggleOverlay);
    } else {
        overlay.style.display = 'block';
        nav_closed.style.display = 'none';
        nav_opened.style.display = 'flex';
        content_container.addEventListener('click', toggleOverlay);
    }
}

/***

    Slides

***/

/* Desktop Btns */
const slideLeftBtn = document.getElementsByClassName('slideLeft_btn')[0];
const slideRightBtn = document.getElementsByClassName('slideRight_btn')[0];

slideLeftBtn.addEventListener('click', slideLeft);
slideRightBtn.addEventListener('click', slideRight);

/* Mobile Btns */
const slideLeftMobileBtn = document.getElementsByClassName(
    'slideLeft_mobile_btn'
)[0];
const slideRightMobileBtn = document.getElementsByClassName(
    'slideRight_mobile_btn'
)[0];

slideLeftMobileBtn.addEventListener('click', slideLeft);
slideRightMobileBtn.addEventListener('click', slideRight);

/* Handle Resize */
window.addEventListener('resize', displaySlide);

let slideIndex = 0;
displaySlide();

function slideLeft() {
    slideIndex--;
    displaySlide();
}

function slideRight() {
    slideIndex++;
    displaySlide();
}

function displaySlide() {
    let heroSlides;
    const heroSlidesMobile = document.getElementsByClassName('hero_mobile')[0];
    // Determine if we are in mobile or desktop display
    if (getComputedStyle(heroSlidesMobile).display === 'none') {
        heroSlides = document.getElementsByClassName('hero_slides')[0].children;
    } else {
        heroSlides = document.getElementsByClassName('hero_slides')[1].children;
    }

    if (slideIndex >= heroSlides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = heroSlides.length - 1;
    }

    for (let slide of heroSlides) {
        slide.style.display = 'none';
    }

    heroSlides[slideIndex].style.display = 'block';
}
