import { initContentLoader } from "./content-management.js";
import { setupThemeToggle } from "./theme-manager.js";

document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
            setupThemeToggle(); // Enable light/dark theme toggle
            setupNavbarBehavior(); // Enable sticky navbar and scroll behavior
        })
        .catch((err) => console.error("Error during initialization:", err));
});

const setupNavbarBehavior = () => {
    const navbar = document.getElementById("navbar");

    if (!navbar) {
        console.warn("Navbar not found in the DOM.");
        return;
    }

    // Ensure sticky-top class is applied
    if (!navbar.classList.contains("sticky-top")) {
        console.log("Adding sticky-top class to navbar.");
        navbar.classList.add("sticky-top");
    }

    // Add scroll behavior
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            console.log("Adding scrolled class to navbar.");
            navbar.classList.add("scrolled");
        } else {
            console.log("Removing scrolled class from navbar.");
            navbar.classList.remove("scrolled");
        }
    });
};