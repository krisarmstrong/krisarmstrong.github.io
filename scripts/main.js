import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";
import { initContactForm } from "./contact.js"; // Ensure contact form logic is loaded

// Main application initialization
document.addEventListener("DOMContentLoaded", () => {
    console.log("Initializing main.js");

    // Load dynamic content
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");

            // Initialize theme toggle
            setupThemeToggle();

            // Check if the current page is the contact page
            const pageId = document.body.getAttribute("data-page");
            if (pageId === "contact") {
                initContactForm(); // Initialize form submission logic
            }
        })
        .catch((err) => {
            console.error("Error during initialization:", err);
        });

    // Add scroll listener for navbar behavior
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    } else {
        console.warn("Navbar not found in the DOM.");
    }
});