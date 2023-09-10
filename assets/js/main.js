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


// Get DOM elements
const audio = document.querySelector('.audio');
const playerImg = document.querySelector('.player-img');
const psongName = document.querySelector('.psong-name');
const partist = document.querySelector('.partist');
const playButton = document.querySelector('.play-btn');
const backButton = document.querySelector('.back-btn');
const forwardButton = document.querySelector('.forward-btn');
const randomButton = document.querySelector('.random-btn');
const repeatButton = document.querySelector('.repeat-btn');
const progressBar = document.querySelector('.progress');
const volumeIcon = document.querySelector('.volume-icon');
const volumeProgressBar = document.querySelector('.volume-progress');
const wrapButtons = document.querySelector('.player-btns-wrap');

// Song titles and artists
const songs = ['Lonely at the top', 'The feels', 'Sunshine', 'Basquiat', 'Olorun', 'I believe'];
const artists = ['Asake', 'Labrinth', 'Asake', 'Asake', 'Asake', 'Asake'];

// Keep Track of songs
let songIndex = 0;
let artistIndex = 0;

// Initialize the audio player
let isPlaying = false;

// Function to load a song and update UI
function loadSong(index) {
    // Check if the index is within bounds
    if (index < 0) {
        index = songs.length - 1;
    } else if (index >= songs.length) {
        index = 0;
    }

    // Set the audio source and update UI
    audio.src = `assets/audio/${songs[index]}.mp3`;
    playerImg.src = `assets/img/${songs[index]}.svg`;
    psongName.innerText = songs[index];
    partist.innerText = artists[index];

    // Update the current indexes
    songIndex = index;
    artistIndex = index;

    // Play the audio if it was already playing
    if (isPlaying) {
        audio.play();
    }
}

// Initial load of song and artist name
loadSong(songIndex);

// Event listener for the play button
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playButton.className = 'uil uil-pause'; // Update the button class to show the pause icon
    } else {
        audio.pause();
        isPlaying = false;
        playButton.className = 'uil uil-play'; // Update the button class to show the play icon
    }
});

// Event listener for the next button
forwardButton.addEventListener('click', () => {
    loadSong(songIndex + 1);
});

// Event listener for the previous button
backButton.addEventListener('click', () => {
    loadSong(songIndex - 1);
});

// Event listener for the progress bar (seeking behavior)
progressBar.addEventListener('click', (e) => {
    const clickedTime = (e.offsetX / progressBar.clientWidth) * audio.duration;
    audio.currentTime = clickedTime;
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

// Event listener for the volume icon (you can implement volume control)
volumeIcon.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        volumeIcon.className = 'uil uil-volume';
    } else {
        audio.muted = true;
        volumeIcon.className = 'uil uil-volume-mute';
    }
});
