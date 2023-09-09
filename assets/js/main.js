// New Releases section
const songsContainer = document.querySelector('.songs-container');

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

// Popular in Your Area section
const songsContainers = document.querySelector('.songs-containers');

let isDraggings = false;
let startPositions = 0;
let scrollLefts = 0;

songsContainers.addEventListener('mousedown', (e) => {
    isDraggings = true;
    startPositions = e.clientX;
    scrollLefts = songsContainers.scrollLeft;

    songsContainers.style.cursor = 'grabbing';
});

songsContainers.addEventListener('mouseup', () => {
    if (isDraggings) {
        isDraggings = false;
        songsContainers.style.cursor = 'grab';
    }
});

songsContainers.addEventListener('mouseleave', () => {
    if (isDraggings) {
        isDraggings = false;
        songsContainers.style.cursor = 'grab';
    }
});

songsContainers.addEventListener('mousemove', (e) => {
    if (!isDraggings) return;
    const deltaX = e.clientX - startPositions;
    songsContainers.scrollLeft = scrollLefts - deltaX;
});

songsContainers.addEventListener('touchstart', (e) => {
    isDraggings = true;
    startPositions = e.touches[0].clientX;
    scrollLefts = songsContainers.scrollLeft;
});

songsContainers.addEventListener('touchend', () => {
    if (isDraggings) {
        isDraggings = false;
    }
});

songsContainers.addEventListener('touchmove', (e) => {
    if (!isDraggings) return;
    const deltaX = e.touches[0].clientX - startPositions;
    songsContainers.scrollLeft = scrollLefts - deltaX;
});





// Menu bar

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav');


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navhidden');
});


// Music Player



const songs = [
    {
      name: 'Lonely at the top',
      artist: 'Asake',
      audio: 'assets/audio/lonely-at-the-top.mp3', // path to audio file
      image: 'assets/img/work-of-art.svg', // path to image file
    },
    // Add more songs as needed
];
  