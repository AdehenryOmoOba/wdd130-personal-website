const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

// Animation with Intersection Observer
const header = $("header");
const items = $$("[data-observer]");
const goTop = $(".go-up");

let observList = Array.from(items);

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("observer-animation");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, { threshold: 0.3 });

// Animate onLoad
export function animateOnLoad() {
  observList.forEach((item) => {
    observer.observe(item);
  });
}

// Debounced Animate onScroll
function debounce() {
  let setTimeoutID;

  return function () {
    if (setTimeoutID) {
      clearTimeout(setTimeoutID);
    }
    setTimeoutID = setTimeout(() => {
      if (window.scrollY < 100) {
        header.classList.add("top");
        // goTop.classList.remove("active");
        observList.forEach((item) => {
          if (
            item.dataset.observer !== "home-text" &&
            item.dataset.observer !== "home-img"
          )
            item.classList.remove("observer-animation");
        });
      } else {
        header.classList.remove("top");
        // goTop.classList.add("active");
      }
    }, 500);
  };
}

export const debouncedAnimateOnPageTop = debounce();
