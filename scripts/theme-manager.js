export const setupThemeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    if (!toggleButton || !navbar) {
        console.error("Theme toggle button or navbar not found.");
        return;
    }

    const applyTheme = (isDark) => {
        body.classList.toggle("bg-dark", isDark);
        body.classList.toggle("text-light", isDark);
        body.classList.toggle("bg-light", !isDark);
        body.classList.toggle("text-dark", !isDark);

        navbar.classList.toggle("navbar-dark", isDark);
        navbar.classList.toggle("navbar-light", !isDark);

        toggleButton.textContent = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";

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