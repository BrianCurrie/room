const nav_openBtn = document.getElementsByClassName('navbar_open')[0];
const nav_closeBtn = document.getElementsByClassName('navbar_close')[0];
const nav_opened = document.getElementsByClassName('navbar_mobile_opened')[0];
const nav_closed = document.getElementsByClassName('navbar_mobile_closed')[0];
const content_container = document.getElementsByClassName('container')[0];
const overlay = document.getElementsByClassName('darken_overlay')[0];

nav_openBtn.addEventListener('click', toggleOverlay);
nav_closeBtn.addEventListener('click', toggleOverlay);

function toggleOverlay() {
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
