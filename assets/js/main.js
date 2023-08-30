const songsContainer = document.querySelector('.new-release');
let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

songsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    scrollLeft = songsContainer.scrollLeft;

    songsContainer.style.cursor = 'grabbing';
});

songsContainer.addEventListener('mouseup', () => {
    isDragging = false;
    songsContainer.style.cursor = 'grab';
});

songsContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    songsContainer.style.cursor = 'grab';
});

songsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPosition;
    songsContainer.scrollLeft = scrollLeft - deltaX;
});

songsContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPosition = e.touches[0].clientX;
    scrollLeft = songsContainer.scrollLeft;
});

songsContainer.addEventListener('touchend', () => {
    isDragging = false;
});

songsContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startPosition;
    songsContainer.scrollLeft = scrollLeft - deltaX;
});


const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav');


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navhidden');
  });