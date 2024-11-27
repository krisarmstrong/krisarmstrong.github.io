const cache = new Map(); // Cache to optimize content fetching

export const loadContent = (id, url) => {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID "${id}" not found.`);
        return Promise.resolve(); // Skip if element doesn't exist
    }

    // Check cache before making a network request
    if (cache.has(url)) {
        element.innerHTML = cache.get(url);
        element.classList.add("loaded"); // Add 'loaded' class for animation
        console.log(`Loaded (cached) content for ${id}`);

        // Reapply sticky behavior if it's the navbar
        if (id === "navbar") {
            ensureStickyBehavior(element);
        }

        return Promise.resolve();
    }

    return fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.text();
        })
        .then((data) => {
            element.innerHTML = data || "<p>Content unavailable.</p>";
            setTimeout(() => {
                element.classList.add("loaded"); // Add 'loaded' class for animation
                console.log(`Added 'loaded' class to ${id}`);
            }, 50); // Delay for rendering

            // Reapply sticky behavior if it's the navbar
            if (id === "navbar") {
                ensureStickyBehavior(element);
            }

            cache.set(url, data); // Cache the content
            console.log(`Loaded content for ${id}`);
        })
        .catch((error) => {
            console.error(`Error loading content for ${id} from ${url}:`, error);
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
        loadContent("navbar", "components/navbar.html").catch(() =>
            console.error("Failed to load navbar")
        ),
        loadContent("header", "components/header.html").catch(() =>
            console.error("Failed to load header")
        ),
        loadContent("footer", "components/footer.html").catch(() =>
            console.error("Failed to load footer")
        ),
    ]).then(() => {
        switch (pageId) {
            case "index":
                return Promise.all([
                    loadContent("professional-summary", "components/professional-summary.html").catch(() =>
                        console.error("Failed to load professional-summary")
                    ),
                    loadContent("key-highlights", "components/key-highlights.html").catch(() =>
                        console.error("Failed to load key-highlights")
                    ),
                    loadContent("core-competencies", "components/core-competencies.html").catch(() =>
                        console.error("Failed to load core-competencies")
                    ),
                ]);
            case "certification":
                return Promise.all([
                    loadContent("security-certification", "components/security-certification.html").catch(() =>
                        console.error("Failed to load security-certification")
                    ),
                    loadContent("wireless-certification", "components/wireless-certification.html").catch(() =>
                        console.error("Failed to load wireless-certification")
                    ),
                    loadContent("network-certification", "components/network-certification.html").catch(() =>
                        console.error("Failed to load network-certification")
                    ),
                ]);
            case "about":
                return Promise.all([
                    loadContent("about-me", "components/about-me.html").catch(() =>
                        console.error("Failed to load about-me")
                    ),
                    loadContent("key-achievements", "components/key-achievements.html").catch(() =>
                        console.error("Failed to load key-achievements")
                    ),
                    loadContent("what-drives-me", "components/what-drives-me.html").catch(() =>
                        console.error("Failed to load what-drives-me")
                    ),
                ]);
            case "contact":
                return loadContent("contact-form", "components/contact-form.html").catch(() =>
                    console.error("Failed to load contact-form")
                );
            default:
                console.warn(`No content defined for pageId: ${pageId}`);
                return Promise.resolve();
        }
    });
};

const ensureStickyBehavior = (navbarElement) => {
    if (!navbarElement.classList.contains("sticky-top")) {
        navbarElement.classList.add("sticky-top"); // Ensure sticky class is applied
    }

    // Force a layout recalculation (optional, in case sticky behavior still fails)
    navbarElement.style.position = "relative";
    requestAnimationFrame(() => {
        navbarElement.style.position = ""; // Reset to allow sticky behavior
    });

    console.log("Sticky behavior ensured for navbar.");
};