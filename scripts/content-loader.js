export const loadContent = (id, url, callback) => {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID "${id}" not found.`);
        return Promise.resolve(); // Skip if element doesn't exist
    }

    return fetch(url)
        .then((res) => res.text())
        .then((data) => {
            element.innerHTML = data || "<p>Content unavailable.</p>";
            if (callback) callback(); // Call the callback after content is loaded
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
            if (typeof setupThemeToggle === "function") {
                setupThemeToggle();
            } else {
                console.warn("setupThemeToggle is not defined.");
            }
        }).catch(() => console.error("Failed to load navbar")),

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
                return loadContent("contact-form", "components/contact-form.html", () => {
                    if (typeof initContactForm === "function") {
                        initContactForm();
                    } else {
                        console.warn("initContactForm is not defined.");
                    }
                }).catch(() => console.error("Failed to load contact-form"));
            default:
                console.warn(`No content defined for pageId: ${pageId}`);
                return Promise.resolve();
        }
    });
};