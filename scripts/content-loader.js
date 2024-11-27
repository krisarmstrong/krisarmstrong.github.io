const cache = new Map(); // Cache to optimize content fetching

export const loadContent = (id, url, callback) => {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID "${id}" not found.`);
        return Promise.resolve(); // Skip if element doesn't exist
    }

    // Check cache for previously fetched content
    if (cache.has(url)) {
        element.innerHTML = cache.get(url);
        if (callback) callback(); // Call the callback if provided
        return Promise.resolve();
    }

    return fetch(url)
        .then((res) => res.text())
        .then((data) => {
            element.innerHTML = data || "<p>Content unavailable.</p>";
            cache.set(url, data); // Cache the fetched content
            if (callback) callback(); // Call the callback if provided
        })
        .catch((error) => {
            console.error(`Error loading content for ${id}:`, error);
        });
};

export const initContentLoader = () => {
    const pageId = document.body.getAttribute("data-page");

    if (!pageId) {
        console.error("No data-page attribute found on <body>.");
        return Promise.resolve();
    }

    console.log(`Initializing content loader for pageId: ${pageId}`);

    return Promise.all([
        loadContent("navbar", "components/navbar.html", () => {
            setupThemeToggle(); // Ensure theme toggle works
            ensureStickyBehavior(); // Apply sticky behavior to the navbar
        }),
        loadContent("header", "components/header.html"),
        loadContent("footer", "components/footer.html"),
    ]).then(() => {
        switch (pageId) {
            case "index":
                return Promise.all([
                    loadContent("professional-summary", "components/professional-summary.html"),
                    loadContent("key-highlights", "components/key-highlights.html"),
                    loadContent("core-competencies", "components/core-competencies.html"),
                ]);
            case "certification":
                return Promise.all([
                    loadContent("security-certification", "components/security-certification.html"),
                    loadContent("wireless-certification", "components/wireless-certification.html"),
                    loadContent("network-certification", "components/network-certification.html"),
                ]);
            case "about":
                return Promise.all([
                    loadContent("about-me", "components/about-me.html"),
                    loadContent("key-achievements", "components/key-achievements.html"),
                    loadContent("what-drives-me", "components/what-drives-me.html"),
                ]);
            case "contact":
                return loadContent("contact-form", "components/contact-form.html", initContactForm); // Initialize the form
            default:
                console.warn(`No content defined for pageId: ${pageId}`);
                return Promise.resolve();
        }
    });
};

const ensureStickyBehavior = (navbarElement) => {
    if (!navbarElement.classList.contains("sticky-top")) {
        navbarElement.classList.add("sticky-top");
    }
    navbarElement.style.position = "relative";
    requestAnimationFrame(() => {
        navbarElement.style.position = ""; // Reset position to allow sticky behavior
    });
    console.log("Sticky behavior ensured for navbar.");
};