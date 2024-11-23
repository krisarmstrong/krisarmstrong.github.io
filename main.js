document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");

    // Wait until the header and nav are fully loaded
    const waitForContent = setInterval(() => {
        if (header && nav && main && header.offsetHeight > 0 && nav.offsetHeight > 0) {
            const headerHeight = header.offsetHeight;
            const navHeight = nav.offsetHeight;

            // Adjust positions
            nav.style.top = `${headerHeight}px`;
            main.style.marginTop = `${headerHeight + navHeight}px`;

            clearInterval(waitForContent); // Stop the interval
        }
    }, 50); // Check every 50ms
});