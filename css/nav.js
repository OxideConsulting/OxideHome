// Query elements
const navbarMenu = document.querySelector("#cs-navigation .cs-ul-wrapper");
const hamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const csBox = document.querySelector("#cs-navigation .cs-box");

// Toggle navigation open and close
hamburgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle("open");
    csBox.classList.toggle("open");

    // Handle aria-expanded attribute for accessibility
    const isExpanded = navbarMenu.classList.contains("open");
    document.querySelector("#cs-navigation .cs-ul").setAttribute("aria-expanded", isExpanded);
});
