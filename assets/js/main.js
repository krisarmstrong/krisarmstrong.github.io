document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");

    // Function to adjust layout
    const adjustLayout = () => {
        if (header && nav && main) {
            const headerHeight = header.offsetHeight || 0;
            const navHeight = nav.offsetHeight || 0;

            // Ensure the header remains sticky at the top
            header.style.position = "sticky";
            header.style.top = "0";

            // Set the nav position relative to the header
            nav.style.position = "sticky";
            nav.style.top = `${headerHeight}px`;

            // Adjust the margin of the main content
            main.style.marginTop = `${headerHeight + navHeight}px`;
        }
    };

    // Initial adjustment
    adjustLayout();

    // Fallback interval to ensure proper layout if elements take time to load
    const waitForContent = setInterval(() => {
        if (header.offsetHeight > 0 && nav.offsetHeight > 0) {
            adjustLayout();
            clearInterval(waitForContent); // Stop the interval once done
        }
    }, 50); // Check every 50ms

    // Re-adjust layout on window resize
    window.addEventListener("resize", adjustLayout);
});