const animatedText = document.getElementById("welcome-text");
let dots = ".";

function animateText() {
  animatedText.textContent = "Welcome" + dots;

  dots += ".";

  if (dots.length > 3) {
    dots = ".";
  }

  setTimeout(animateText, 500); // Adjust the interval time (in milliseconds) to control the speed of animation
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