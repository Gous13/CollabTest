// =========================
// CREZIA JAVASCRIPT
// =========================

console.log("Crezia website loaded successfully.");


// Detect when a navigation link is clicked
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation clicked:", link.textContent);

    });

});


// Hero CTA button
const heroCtaBtn = document.getElementById("hero-cta-btn");

if (heroCtaBtn) {

    heroCtaBtn.addEventListener("click", function (e) {

        console.log("CTA clicked: navigating to Projects section.");

    });

}