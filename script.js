
/* Get the menu button and navigation links */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

/* Open and close the mobile navigation */
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    // Update the button's accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    // Change the menu icon
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* Close the mobile menu when a link is clicked */
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";
    });
});

/* Automatically display the current year in the footer */
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
