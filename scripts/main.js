// JavaScript for Navbar and Theme
import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
            setupThemeToggle(); // Ensure theme toggle functionality
            setupNavbarScrollBehavior(); // Ensure scroll behavior is set
        })
        .catch((err) => console.error("Error during initialization:", err));
});

// Navbar scroll behavior
const setupNavbarScrollBehavior = () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
        console.warn("Navbar not found in the DOM.");
        return;
    }

    // Apply sticky-top class if missing
    if (!navbar.classList.contains("sticky-top")) {
        navbar.classList.add("sticky-top");
    }

    // Add scroll behavior
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
};