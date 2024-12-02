const COMPONENTS_PATH = "components";
const cache = new Map();

// Function to apply the saved theme on page load
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode
    const body = document.body;

    // Set the body classes based on the saved theme
    if (savedTheme === "dark") {
        body.classList.remove("bg-light", "text-dark");
        body.classList.add("bg-dark", "text-light");
    } else {
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");
    }
};

// Function to toggle theme and save preference
export const setupThemeToggle = () => {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.warn("Theme toggle button not found.");
        return;
    }

    // Update toggle button icon and apply classes dynamically
    const updateToggleUI = () => {
        const icon = themeToggle.querySelector("i");
        const body = document.body;

        if (body.classList.contains("bg-dark")) {
            icon.className = "bi bi-sun-fill"; // Sun icon for dark mode
        } else {
            icon.className = "bi bi-moon-fill"; // Moon icon for light mode
        }
    };

    // Initialize UI with the correct icon and classes
    updateToggleUI();

    // Add click event listener for the toggle button
    themeToggle.addEventListener("click", () => {
        const body = document.body;

        // Toggle between dark and light themes
        if (body.classList.contains("bg-dark")) {
            body.classList.remove("bg-dark", "text-light");
            body.classList.add("bg-light", "text-dark");
            localStorage.setItem("theme", "light"); // Save preference
        } else {
            body.classList.remove("bg-light", "text-dark");
            body.classList.add("bg-dark", "text-light");
            localStorage.setItem("theme", "dark"); // Save preference
        }

        updateToggleUI(); // Update the toggle button UI
    });
};

// Function to ensure the navbar is sticky
const initializeStickyNavbar = () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) {
        console.warn("Navbar not found for sticky initialization.");
        return;
    }

    // Ensure the sticky-top class is applied
    if (!navbar.classList.contains("sticky-top")) {
        navbar.classList.add("sticky-top");
        console.log("Sticky-top class applied to navbar.");
    }
};

// Function to load HTML content into specified elements
export const loadContent = (id, url) => {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID "${id}" not found.`);
        return Promise.resolve(); // Skip if element doesn't exist
    }

    // Use cache if available
    if (cache.has(url)) {
        element.innerHTML = cache.get(url);
        element.classList.add("loaded");
        console.log(`Loaded (cached) content for ${id}`);
        return Promise.resolve();
    }

    // Fetch and load content if not cached
    return fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.text();
        })
        .then((data) => {
            element.innerHTML = data || "<p>Content unavailable.</p>";
            element.classList.add("loaded");
            cache.set(url, data);
            console.log(`Loaded content for ${id}`);
        })
        .catch((error) => {
            console.error(`Error loading content for ${id}:`, error);
            element.innerHTML = "<p>Sorry, this section is temporarily unavailable.</p>";
        });
};

// Page components definition
const pageComponents = {
    index: ["professional-summary", "key-highlights", "core-competencies"],
    certification: ["security-certification", "wireless-certification", "network-certification", "other-certification"],
    about: ["about-me", "key-achievements", "what-drives-me"],
    contact: ["contact-form"],
};

// Function to initialize content loader
export const initContentLoader = () => {
    const pageId = document.body.getAttribute("data-page");

    if (!pageId) {
        console.error("No data-page attribute found on <body>.");
        return Promise.resolve();
    }

    console.log(`Initializing content loader for pageId: ${pageId}`);

    // Load navbar, header, and footer first
    return Promise.all([
        loadContent("navbar", `${COMPONENTS_PATH}/navbar.html`).then(() => {
            initializeStickyNavbar(); // Ensure sticky navbar after loading
        }),
        loadContent("header", `${COMPONENTS_PATH}/header.html`),
        loadContent("footer", `${COMPONENTS_PATH}/footer.html`),
    ])
        .then(() => {
            // Load page-specific components
            if (pageComponents[pageId]) {
                return Promise.all(
                    pageComponents[pageId].map((component) =>
                        loadContent(component, `${COMPONENTS_PATH}/${pageId}/${component}.html`)
                    )
                );
            }
            console.warn(`No components defined for pageId: ${pageId}`);
        })
        .then(() => {
            document.dispatchEvent(new Event("contentLoaded")); // Notify other scripts
        });
};

// Initialize theme and content loader
document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme(); // Apply saved theme before any other scripts
    initContentLoader()
        .then(() => {
            console.log("All content loaded successfully.");
            setupThemeToggle(); // Enable light/dark theme toggle
        })
        .catch((err) => console.error("Error during initialization:", err));
});