document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }
});