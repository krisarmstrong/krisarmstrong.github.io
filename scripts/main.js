// JavaScript for Navbar and Theme
import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

// Ensure navbar scroll behavior runs after dynamic content loads
document.addEventListener("DOMContentLoaded", () => {
    initContentLoader(() => {
        console.log("All content loaded successfully.");
        setupThemeToggle(); // Ensure theme toggle functionality
        setupNavbarScrollBehavior(); // Ensure scroll behavior is set after navbar loads
    });
});

// Navbar scroll behavior
const setupNavbarScrollBehavior = () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
        console.warn("Navbar not found in the DOM.");
        return;
    }

    // Always ensure sticky-top is applied
    navbar.classList.add("sticky-top");

    // Add scroll behavior
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
};