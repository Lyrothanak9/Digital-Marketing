'use strict';

/**
 * Utility function to add event listeners to multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * MOBILE NAVBAR TOGGLE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER & BACK TOP BTN ACTIVE (Optional standard addition for fixed headers, 
 * though the core tutorial focuses heavily on the Parallax)
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * PARALLAX EFFECT ON HERO SHAPES
 */
const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
  for (let i = 0; i < parallaxElements.length; i++) {
    // Get the specific speed assigned to each shape in the HTML
    const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);
    const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed);

    // Use Web Animations API to apply smooth translation
    parallaxElements[i].animate(
      {
        transform: `translate(${movementX}px, ${movementY}px)`
      }, 
      { 
        duration: 500, 
        fill: "forwards" 
      }
    );
  }
});