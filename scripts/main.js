import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

// Entry point of the app
document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
            setupThemeToggle();
        })
        .catch((err) =>
            console.error("Error during initialization:", err)
        );
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar"); // Target your navbar element

    if (window.scrollY > 10) {
        navbar.classList.add("scrolled"); // Add shadow or style changes when scrolling
    } else {
        navbar.classList.remove("scrolled"); // Remove shadow or style changes when at the top
    }
});

document.addEventListener("DOMContentLoaded", () => {
    initContentLoader();
});