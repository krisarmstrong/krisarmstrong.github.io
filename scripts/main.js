import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
        })
        .catch((err) => console.error("Error during initialization:", err));
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

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