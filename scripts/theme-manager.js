export const setupThemeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    if (!toggleButton) {
        console.error("Theme toggle button not found in the DOM.");
        return;
    }

    // Helper function to apply hover effects
    const applyHoverEffects = (elements, isDark) => {
        if (!elements) return;
        elements.forEach((el) => {
            el.style.transition = "transform 0.2s ease, color 0.2s ease";
            el.addEventListener("mouseenter", () => {
                el.style.color = isDark ? "#4dabf7" : "#1a73e8";
                el.style.transform = "scale(1.1)";
            });
            el.addEventListener("mouseleave", () => {
                el.style.color = "";
                el.style.transform = "";
            });
        });
    };

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

        // Apply hover effects
        const icons = Array.from(document.querySelectorAll(".fa-circle-check"));
        const titles = Array.from(document.querySelectorAll(".section-title"));
        const buttons = Array.from(document.querySelectorAll(".btn"));
        applyHoverEffects(icons, isDark);
        applyHoverEffects(titles, isDark);
        applyHoverEffects(buttons, isDark);

        // Update button text and appearance
        toggleButton.textContent = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
        toggleButton.classList.toggle("btn-outline-light", isDark);
        toggleButton.classList.toggle("btn-outline-dark", !isDark);

        // Save theme in localStorage
        if (localStorage) {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    };

    // Check saved theme or default to dark
    const savedTheme = (localStorage && localStorage.getItem("theme")) || "dark";
    applyTheme(savedTheme === "dark");

    toggleButton.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-dark");
        applyTheme(!isDark);
    });
};