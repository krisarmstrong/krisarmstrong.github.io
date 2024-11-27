import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

// Entry point of the app
document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
            setupThemeToggle(); // Initialize light/dark mode toggle
        })
        .catch((err) => console.error("Error during initialization:", err));
});

// Scroll-based effects (e.g., navbar shadow)
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar"); // Target navbar

    if (navbar) {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    } else {
        console.warn("Navbar not found in the DOM.");
    }
});