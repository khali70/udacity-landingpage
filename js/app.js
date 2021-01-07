/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const navBtns = document.getElementsByClassName("menu__link");

const [navBtn1, navBtn2, navBtn3] = navBtns;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
/**
 * @description :togglo the nav menu
 * @fires       :click on the burgur icon on the page
 */
function onClickMenu() {
  const menu = document.getElementById("menu");
  const nav = document.getElementById("navbar__list");
  const navGrid = document.getElementById("menu-bg");
  const blurBG = document.querySelector(".bg-blur");

  // change the menu from burger icon to X
  menu.classList.toggle("change");

  // show the menu items
  nav.classList.toggle("change");

  // show the menu background grid
  navGrid.classList.toggle("change-bg");

  // blur the back ground
  blurBG.classList.toggle("active");
}
// Add class 'active' to section when near top of viewport
/**
 * @description
 * actiave the section in view
 * @event scrolling when scroll this function fire and active the
 * section in view
 */
const activate = () => {
  const y = window.pageYOffset;

  // loop for the sections
  [section1, section2, section3].forEach((sec, i, ele) => {
    const { offsetHeight, offsetTop } = sec;
    // if the section is on view add active class
    if (
      y > offsetTop &&
      y < offsetTop + offsetHeight &&
      !sec.classList.contains("active")
    ) {
      sec.classList.toggle("active");

      // unactivate other sections
      ele.forEach((otherSec) => {
        if (otherSec !== sec) {
          otherSec.classList.remove("active");
        }
      });
    }
  });
};

// Scroll to anchor ID using scrollTO event
/**
 * @description scroll to the element the the activitor pointer point to
 * @param {HTMLElement} navBtn the activator element which point to the target
 */
const scrollTarget = (navBtn) => {
  const target = document.getElementById(navBtn.dataset.target);
  target.scrollIntoView();
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

[navBtn1, navBtn2, navBtn3].forEach((navBtn) => {
  navBtn.addEventListener("click", (e) => {
    scrollTarget(navBtn);
  });
});

// Set sections as active

window.addEventListener("scroll", activate);
