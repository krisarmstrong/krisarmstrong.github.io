// Adjust the navigation bar's position dynamically
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    if (header && nav) {
        // Dynamically adjust the top position of the nav
        nav.style.top = `${header.offsetHeight}px`;
    }
});