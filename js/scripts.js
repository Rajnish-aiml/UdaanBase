// document.getElementById("year").textContent = new Date().getFullYear();

// Automatically set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


// function openLightbox(src) {
//   document.getElementById('lightbox-img').src = src;
//   document.getElementById('lightbox').style.display = 'flex';
// }

// function closeLightbox() {
//   document.getElementById('lightbox').style.display = 'none';
// }

function toggleMenu() {
  const menu = document.getElementById("nav-links");
  if (menu) {
    menu.classList.toggle("show");
  } else {
    console.error("nav-links element not found");
  }
}

//Light box part for images

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';

  // Push a new state to the browser history
  history.pushState({ lightboxOpen: true }, "", "#lightbox");
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';

  // Go back one step in history if lightbox was opened via pushState
  if (location.hash === "#lightbox") {
    history.back();
  }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function (event) {
  if (event.state && event.state.lightboxOpen) {
    closeLightbox();
  } else {
    // Optional: handle other states here
    document.getElementById('lightbox').style.display = 'none';
  }
});








