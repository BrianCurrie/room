const nav_openBtn = document.getElementsByClassName('navbar_open')[0];
const nav_closeBtn = document.getElementsByClassName('navbar_close')[0];
const nav_opened = document.getElementsByClassName('navbar_mobile_opened')[0];
const nav_closed = document.getElementsByClassName('navbar_mobile_closed')[0];

nav_openBtn.addEventListener('click', () => {
    nav_closed.style.display = 'none';
    nav_opened.style.display = 'flex';
    toggleDark();
});

nav_closeBtn.addEventListener('click', () => {
    nav_closed.style.display = 'flex';
    nav_opened.style.display = 'none';
    toggleDark();
});

function toggleDark() {
    const overlay = document.getElementsByClassName('darken_overlay')[0];
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }
}
