document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");

    if (header && nav && main) {
        const headerHeight = header.offsetHeight;
        const navHeight = nav.offsetHeight;
        nav.style.top = `${headerHeight}px`; /* Matches header's dynamic height */
        main.style.marginTop = `${headerHeight + navHeight}px`; /* Avoids overlap */
    }
});