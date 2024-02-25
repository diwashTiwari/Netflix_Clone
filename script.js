// define all UI variable
const navToggler = document.querySelector (".nav-toggler_show-hide");
const navMenu = document.querySelector('.faq-contents-bar .toggle');
const navLinks = document.querySelectorAll('.navbar-content a');

// load all event listners
allEventListners();

function allEventListners() {
  // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

