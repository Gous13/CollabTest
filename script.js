// =========================
// CREZIA JAVASCRIPT
// =========================

console.log("Crezia website loaded successfully.");


// =========================
// NAVIGATION — link click logger
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation clicked:", link.textContent);

    });

});


// =========================
// HAMBURGER MENU — toggle open/close on mobile
// =========================

const hamburgerBtn = document.getElementById("hamburger-btn");
const navElement   = document.querySelector("#navbar nav");

if (hamburgerBtn && navElement) {

    hamburgerBtn.addEventListener("click", function () {

        const isOpen = navElement.classList.toggle("nav-open");

        // Animate the button into an X and update accessibility state
        hamburgerBtn.classList.toggle("open", isOpen);
        hamburgerBtn.setAttribute("aria-expanded", isOpen);

        console.log("Hamburger menu:", isOpen ? "opened" : "closed");

    });

    // Close the menu when any nav link is clicked (mobile UX)
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navElement.classList.remove("nav-open");
            hamburgerBtn.classList.remove("open");
            hamburgerBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// =========================
// ACTIVE LINK — highlight the current section while scrolling
// =========================

const sections = document.querySelectorAll("main section[id]");

function setActiveLink() {

    let currentSectionId = "";

    sections.forEach(function (section) {

        // A section is "active" when its top edge is within the top 40% of the viewport
        const sectionTop    = section.getBoundingClientRect().top;
        const triggerOffset = window.innerHeight * 0.4;

        if (sectionTop <= triggerOffset) {
            currentSectionId = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === "#" + currentSectionId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

}

// Run on scroll with passive flag for performance
window.addEventListener("scroll", setActiveLink, { passive: true });

// Run once on page load to set initial active state
setActiveLink();


// =========================
// HERO CTA BUTTON
// =========================

const heroCtaBtn = document.getElementById("hero-cta-btn");

if (heroCtaBtn) {

    heroCtaBtn.addEventListener("click", function () {

        console.log("CTA clicked: navigating to Projects section.");

    });

}
