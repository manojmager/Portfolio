export function initializeHeader() {

/* ACTIVE NAV LINK */
  const sections = document.querySelectorAll("section, header");
  const navLi = document.querySelectorAll("#main-nav li a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 80;
    let height = section.offsetHeight;
    let current = section.getAttribute("id"); 

    if (top >= offset && top < offset + height) {
      navLi.forEach((a) => {
        a.classList.remove("active");
        document.querySelector("#main-nav li a[href*=" + current +"]").classList.add('active');
      });
    }
  });
};

/* Transition effect when sliding down (and up) */
  var prevScrollpos = window.pageYOffset;
  // Add a function to handle the scroll effect
  function handleScrollEffect() {
    var currentScrollPos = window.pageYOffset;
    // Select all elements with class .main-items
    var mainItems = document.querySelectorAll('.main-items');

    // Iterate through all .main-items elements and apply the styling
    mainItems.forEach(function (item) {
      if (prevScrollpos > currentScrollPos) {
        // Scrolling up
        item.style.top = '0px';
      } else {
        // Scrolling down
        item.style.top = '-70px';
      }
    });

    prevScrollpos = currentScrollPos;
  }
  // Attach the scroll effect handler to the window scroll event
  window.addEventListener('scroll', handleScrollEffect);


/* ACTIVE NAV TOGGLE */
  const primaryNav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.mobile-nav-toggle');

  let isNavOpen = primaryNav.getAttribute('data-visible'); // Add a flag to track the state

  navToggle.addEventListener('click', () => {
    if (isNavOpen) {
      primaryNav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      primaryNav.setAttribute('data-visible', 'true');
      navToggle.setAttribute('aria-expanded', 'true');
    }

    isNavOpen = !isNavOpen; // Toggle the flag
  });

  const contactModel = document.querySelector('.contact-model');
  const contactToggle = document.querySelector('.contact-nav-toggle');
  const closeModel = document.querySelector('.close');

  let isContModelOpen = primaryNav.getAttribute('data-visible'); // Add a flag to track the state

  contactToggle.addEventListener('click', state);
  closeModel.addEventListener('click', state);

  function state() {

    if (isContModelOpen) {
      contactModel.setAttribute('data-visible', 'true');
      contactToggle.setAttribute('aria-expanded', 'true');
    } else {
      contactModel.setAttribute('data-visible', 'false');
      contactToggle.setAttribute('aria-expanded', 'false');
    }

    isContModelOpen = !isContModelOpen;
  }

}