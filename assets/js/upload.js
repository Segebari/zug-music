// Menu bar

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav');


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navhidden');
  });