// script.js
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    const aboutButton = document.getElementById('aboutButton');
    const someButton = document.getElementById('someButton');
    const schoolWorkButton = document.getElementById('schoolWorkButton');
    const galleryButton = document.getElementById('galleryButton');
    const contactButton = document.getElementById('contactButton');
  
    homeButton.addEventListener('click', () => {
      window.location.href = '/Remake/index.html'; // Change to the desired URL
    });

    aboutButton.addEventListener('click', () => {
        window.location.href = '/Remake/Pages/about.html'; // Change to the desired URL
    });

    someButton.addEventListener('click', () => {
        window.location.href = '/Remake/Pages/some.html'; // Change to the desired URL
    });

    schoolWorkButton.addEventListener('click', () => {
        window.location.href = '/Remake/Pages/schoolWork.html'; // Change to the desired URL
    });

    galleryButton.addEventListener('click', () => {
        window.location.href = '/Remake/Pages/gallery.html'; // Change to the desired URL
    });
  
    contactButton.addEventListener('click', () => {
      window.location.href = '/Remake/Pages/contact.html'; // Change to the desired URL
    });
});
  