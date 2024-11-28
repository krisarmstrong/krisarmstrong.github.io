export const setupThemeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (!toggleButton) {
        console.error("Theme toggle button not found.");
        return;
    }

    const applyTheme = (isDark) => {
        // Toggle light/dark theme classes for the body
        body.classList.toggle("bg-dark", isDark);
        body.classList.toggle("text-light", isDark);
        body.classList.toggle("bg-light", !isDark);
        body.classList.toggle("text-dark", !isDark);

        // Update the toggle button text
        toggleButton.textContent = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";

        // Save theme preference in localStorage
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme === "dark");

    // Toggle theme on button click
    toggleButton.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-dark");
        applyTheme(!isDark);
    });
};