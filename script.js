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

        hamburgerBtn.classList.toggle("open", isOpen);
        hamburgerBtn.setAttribute("aria-expanded", isOpen);

        console.log("Hamburger menu:", isOpen ? "opened" : "closed");

    });

    // Close menu when any nav link is clicked (mobile UX)
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navElement.classList.remove("nav-open");
            hamburgerBtn.classList.remove("open");
            hamburgerBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// =========================
// ACTIVE LINK — scroll-spy to highlight current section
// =========================

const sections = document.querySelectorAll("main section[id]");

function setActiveLink() {

    let currentSectionId = "";

    sections.forEach(function (section) {

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

window.addEventListener("scroll", setActiveLink, { passive: true });
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


// =========================
// CONTACT FORM — validation and submit feedback
// =========================

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name    = contactForm.name.value.trim();
        const email   = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        // Validate fields
        if (!name || !email || !message) {
            formFeedback.textContent = "Please fill in all fields.";
            formFeedback.className   = "form-feedback error";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formFeedback.textContent = "Please enter a valid email address.";
            formFeedback.className   = "form-feedback error";
            return;
        }

        // Success (no backend — UI feedback only)
        formFeedback.textContent = "Thanks for your message! We'll get back to you soon.";
        formFeedback.className   = "form-feedback success";
        contactForm.reset();

        console.log("Contact form submitted:", { name, email, message });

    });

}
