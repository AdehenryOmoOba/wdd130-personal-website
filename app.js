import {
  animateOnLoad,
  debouncedAnimateOnPageTop,
} from "./intersectioObserver.js";

const $ = document.querySelector.bind(document);

window.addEventListener("load", animateOnLoad);

window.addEventListener("scroll", debouncedAnimateOnPageTop);

// Toggle menu
const toggleMenu = $(".toggle-menu");
const navbar = $(".navbar");

if (toggleMenu) {
  toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}

if (navbar) {
  navbar.addEventListener("click", (e) => {
    if (e.target.localName === "a") {
      navbar.classList.remove("active");
      toggleMenu.classList.remove("active");
    }
  });
}
