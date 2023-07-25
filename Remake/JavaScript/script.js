const changingText = document.getElementById("changing-text");
let currentTitleIndex = 0;

const titles = ["IT operations technician", "IT Profetional", "Aprentice", "App developer", "Web designer", "Server manager", "Programmer", "Network engineer"];

function animateText() {
  changingText.textContent = titles[currentTitleIndex];
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;

  setTimeout(animateText, 1000); // Change the interval time (in milliseconds) to control the speed of animation
}

// Get the modal element
const modal = document.getElementById("myModal");

// Function to open the popup
function openPopup() {
  modal.style.display = "block";
}

// Function to close the popup
function closePopup() {
  modal.style.display = "none";
}



// Start the animation
animateText();

function hideVideo() {
    const videoContainer = document.getElementById("video-container");
    videoContainer.classList.add("hidden");
}

const video = document.getElementById('introVideo');

function setVideoSpeed(speed) {
  video.playbackRate = speed;
}

// Example usage: Change speed to 1.5x
setVideoSpeed(1.5);

