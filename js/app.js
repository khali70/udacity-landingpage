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

const mainBody = document.getElementsByTagName("main");
const nav = document.getElementById("navbar__list");

const sections = () =>
  [...mainBody[0].children].filter((child) => {
    if (child.tagName.toUpperCase() === "section".toUpperCase()) {
      return document.getElementById(child.id);
    }
  });
// when fun calls lookfor the updtated links and return it as arr
const navBtns = () => [...nav.children].map((li) => li.children[0]);

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
// add new section ---------------------------------------------------------
const addSection = () => {
  const sec = sections()[0];
  const sectionName = `${sec.tagName[0] + sec.tagName.slice(1).toLowerCase()} ${
    sections().length + 1
  }`;
  const sectionId = `${sec.tagName.toLowerCase()}${sections().length + 1}`;
  mainBody[0].innerHTML += `
  <section id="${sectionId}" data-nav="${sectionName}">
        <div class="landing__container">
          <h2>${sectionName}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum metus faucibus lectus pharetra dapibus. Suspendisse
            potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
            lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
            convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
            eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
            lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
            tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie
            semper in tellus. Sed congue et odio sed euismod.
          </p>

          <p>
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
            gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
            Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
            consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
            elementum tortor mollis non.
          </p>
        </div>
      </section>
  `;
};
// build the nav  ----------------------------------------------------------
/**
 * @description loop the sections and make link to every section then add the link for the section in navbar
 */
const buildNav = () => {
  // loop sections and add link to every section
  sections().forEach((sec, i) => {
    // create the list item
    const navLink = document.createElement("a");
    navLink.classList.add("menu__link");
    navLink.dataset["target"] = sec.id;
    navLink.innerText = `${
      sec.tagName[0] + sec.tagName.slice(1).toLowerCase()
    } ${i + 1}`;
    const listItem = document.createElement("li");
    listItem.appendChild(navLink);
    // add the navlist (<li>) to the navlinks
    nav.appendChild(listItem);
  });
};

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

// Add class 'active' to section when near top of viewport -----------------

/**
 * @description
 * actiave the section in view
 * @event scrolling when scroll this function fire and active the
 * section in view
 */
const activate = () => {
  const y = window.pageYOffset;

  // loop for the sections
  sections().forEach((sec, i, ele) => {
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

// Scroll to anchor ID using scrollTO event  -------------------------------
/**
 * @description scroll to the element that the activitor pointer point to
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
// add new section ---------------------------------------------------------
addSection();
// Build menu  -------------------------------------------------------------
buildNav();
// Scroll to section on link click  ----------------------------------------

navBtns().forEach((navBtn) => {
  navBtn.addEventListener("click", (e) => {
    scrollTarget(navBtn);
  });
});

// Set sections as active  -------------------------------------------------

window.addEventListener("scroll", activate);
