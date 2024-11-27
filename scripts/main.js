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