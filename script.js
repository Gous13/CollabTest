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