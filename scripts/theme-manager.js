export const setupThemeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    if (!toggleButton) {
        console.warn("Theme toggle button not found.");
        return;
    }

    const applyTheme = (isDark) => {
        body.classList.toggle("bg-dark", isDark);
        body.classList.toggle("text-light", isDark);
        body.classList.toggle("bg-light", !isDark);
        body.classList.toggle("text-dark", !isDark);

        navbar?.classList.toggle("navbar-dark", isDark);
        navbar?.classList.toggle("bg-dark", isDark);
        navbar?.classList.toggle("navbar-light", !isDark);
        navbar?.classList.toggle("bg-light", !isDark);

        toggleButton.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
        toggleButton.classList.toggle("btn-outline-light", isDark);
        toggleButton.classList.toggle("btn-outline-dark", !isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme === "dark");

    toggleButton.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-dark");
        applyTheme(!isDark);
    });
};