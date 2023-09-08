// Menu bar

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav');


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navhidden');
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    // Get the file input element and listen for changes
    const fileInput = document.getElementById('song-upload');
    fileInput.addEventListener('change', handleFileUpload);

    function handleFileUpload(event) {
      const file = event.target.files[0];
      const messageContainer = document.getElementById('message-container');
      
      if (file) {
        // Simulate an upload process (you would replace this with your actual server upload)
        setTimeout(() => {
          // Display a success message in the div
          messageContainer.innerHTML = 'Song uploaded successfully!';
          
          // Redirect to the homepage (you would replace this with your actual URL)
          window.location.href = 'homepage.html';
        }, 2000); // Simulated 2-second upload delay
      }
    }
  });

