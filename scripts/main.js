import { initContentLoader } from "./content-loader.js";
import { setupThemeToggle } from "./theme-manager.js";

document.addEventListener("DOMContentLoaded", () => {
    initContentLoader()
        .then(() => {
            console.log("All content loaded. Initializing theme toggle...");
            setupThemeToggle();
        })
        .catch((err) => console.error("Error during initialization:", err));
});