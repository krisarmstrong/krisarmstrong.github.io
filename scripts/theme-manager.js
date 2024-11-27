export const setupThemeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    if (!toggleButton || !navbar) {
        console.error("Theme toggle button or navbar not found.");
        return;
    }

    // Function to apply the chosen theme
    const applyTheme = (isDark) => {
        // Toggle body classes for light and dark mode
        body.classList.toggle("bg-dark", isDark);
        body.classList.toggle("text-light", isDark);
        body.classList.toggle("bg-light", !isDark);
        body.classList.toggle("text-dark", !isDark);

        // Toggle navbar theme classes
        navbar.classList.toggle("navbar-dark", isDark);
        navbar.classList.toggle("navbar-light", !isDark);

        // Ensure sticky-top remains intact
        if (!navbar.classList.contains("sticky-top")) {
            navbar.classList.add("sticky-top");
        }

        // Update button text
        toggleButton.textContent = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";

        // Save theme preference
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    // Load saved theme from localStorage, default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme === "dark");

    // Event listener for the toggle button
    toggleButton.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-dark");
        applyTheme(!isDark);
    });
};