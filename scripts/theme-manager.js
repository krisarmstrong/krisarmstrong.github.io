export const setupThemeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    // Ensure the toggle button exists
    if (!toggleButton) {
        console.error("Theme toggle button not found in the DOM.");
        return;
    }

    // Helper function to apply hover effects
    const applyHoverEffects = (elements, isDark) => {
        if (!elements) return; // Guard clause for missing elements
        elements.forEach((el) => {
            el.style.transition = "transform 0.2s ease, color 0.2s ease";
            el.addEventListener("mouseenter", () => {
                el.style.color = isDark ? "#4dabf7" : "#1a73e8"; // Blue hover color
                el.style.transform = "scale(1.1)"; // Slight zoom
            });
            el.addEventListener("mouseleave", () => {
                el.style.color = ""; // Revert to default
                el.style.transform = ""; // Reset scale
            });
        });
    };

    // Main function to toggle and apply the theme
    const applyTheme = (isDark) => {
        // Body and Navbar theme changes
        body.classList.toggle("bg-dark", isDark);
        body.classList.toggle("text-light", isDark);
        body.classList.toggle("bg-light", !isDark);
        body.classList.toggle("text-dark", !isDark);

        navbar.classList.toggle("navbar-dark", isDark);
        navbar.classList.toggle("bg-dark", isDark);
        navbar.classList.toggle("navbar-light", !isDark);
        navbar.classList.toggle("bg-light", !isDark);

        // Apply hover effects to specific elements
        const icons = document.querySelectorAll(".fa-circle-check");
        const titles = document.querySelectorAll(".section-title");
        const buttons = document.querySelectorAll(".btn");
        applyHoverEffects(icons, isDark);
        applyHoverEffects(titles, isDark);
        applyHoverEffects(buttons, isDark);

        // Update toggle button appearance and save the theme
        toggleButton.textContent = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
        toggleButton.classList.toggle("btn-outline-light", isDark);
        toggleButton.classList.toggle("btn-outline-dark", !isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme === "dark");

    // Add click event to toggle button
    toggleButton.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-dark");
        applyTheme(!isDark);
    });
};