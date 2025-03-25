document.addEventListener("DOMContentLoaded", function() {
  const frames = document.querySelectorAll(".frame");
  const sliders = document.querySelectorAll(".slider");
  const dotsContainer = document.querySelector(".slider-dots");

  let currentFrameIndex = 0;
  const totalFrames = frames.length;

  // Initialize sliders and dots
  sliders.forEach((slider, frameIndex) => {
    const slides = slider.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.addEventListener("click", () => {
        // Handle click on slide
        console.log(`Clicked on image ${i + 1} in frame ${frameIndex + 1}`);
        // Example: You can redirect or perform an action here
      });
    });
       

  



    // Create dots for each frame
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (frameIndex === currentFrameIndex) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      goToFrame(frameIndex);
    });
    dotsContainer.appendChild(dot);
  });

  function goToFrame(frameIndex) {
    if (frameIndex < 0 || frameIndex >= totalFrames) return;

    currentFrameIndex = frameIndex;
    const offset = -currentFrameIndex * 100;
    sliders.forEach((slider, i) => {
      slider.style.transform = `translateX(${offset}%)`;
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === currentFrameIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Automatic slideshow
  setInterval(() => {
    currentFrameIndex = (currentFrameIndex + 1) % totalFrames;
    goToFrame(currentFrameIndex);
  }, 3000); // Change slide every 3 seconds (adjust as needed)

  // Initial setup
  goToFrame(currentFrameIndex);
});






<style.css>



























