// JavaScript for Navbar and Theme
import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
            setupThemeToggle(); // Ensure light/dark mode toggles are functional
        })
        .catch((err) => console.error("Error during initialization:", err));
});

// Navbar scroll behavior
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
        console.warn("Navbar element not found.");
        return;
    }

    if (window.scrollY > 10) {
        navbar.classList.add("scrolled"); // Add styles on scroll
    } else {
        navbar.classList.remove("scrolled");
    }
});