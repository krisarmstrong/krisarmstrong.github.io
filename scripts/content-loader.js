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
        return Promise.resolve();
    }

    return fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.text();
        })
        .then((data) => {
            element.innerHTML = data || "<p>Content unavailable.</p>";
            element.classList.add("loaded"); // Add 'loaded' class for animation
            cache.set(url, data); // Cache the content
            console.log(`Loaded content for ${id}`);
        })
        .catch((error) => console.error(`Error loading content for ${id} from ${url}:`, error));
};

export const initContentLoader = () => {
    const pageId = document.body.getAttribute("data-page");

    if (!pageId) {
        console.error("No data-page attribute found on <body>.");
        return Promise.resolve();
    }

    console.log(`Initializing content loader for pageId: ${pageId}`);

    return Promise.all([
        loadContent("navbar", "components/navbar.html"),
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
                return loadContent("contact-form", "components/contact-form.html");
            default:
                console.warn(`No content defined for pageId: ${pageId}`);
                return Promise.resolve();
        }
    });
};