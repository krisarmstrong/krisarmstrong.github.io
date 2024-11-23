document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");

    // Function to adjust layout
    const adjustLayout = () => {
        if (header && nav && main) {
            const headerHeight = header.offsetHeight || 0;
            const navHeight = nav.offsetHeight || 0;

            // Dynamically set the top of the nav and the margin of the main content
            nav.style.top = `${headerHeight}px`;
            main.style.marginTop = `${headerHeight + navHeight}px`;
        }
    };

    // Initial adjustment
    adjustLayout();

    // Fallback interval to ensure the layout is corrected if elements take time to load
    const waitForContent = setInterval(() => {
        if (header.offsetHeight > 0 && nav.offsetHeight > 0) {
            adjustLayout();
            clearInterval(waitForContent); // Stop the interval once done
        }
    }, 50); // Check every 50ms

    // Re-adjust layout on window resize
    window.addEventListener("resize", adjustLayout);
});