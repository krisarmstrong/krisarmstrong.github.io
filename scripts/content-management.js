const COMPONENTS_PATH = "components";
const cache = new Map();

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

const pageComponents = {
    index: ["professional-summary", "key-highlights", "core-competencies"],
    certification: ["security-certification", "wireless-certification", "network-certification"],
    about: ["about-me", "key-achievements", "what-drives-me"],
    contact: ["contact-form"],
};

export const initContentLoader = () => {
    const pageId = document.body.getAttribute("data-page");

    if (!pageId) {
        console.error("No data-page attribute found on <body>.");
        return Promise.resolve();
    }

    console.log(`Initializing content loader for pageId: ${pageId}`);

    return Promise.all([
        loadContent("navbar", `${COMPONENTS_PATH}/navbar.html`),
        loadContent("header", `${COMPONENTS_PATH}/header.html`),
        loadContent("footer", `${COMPONENTS_PATH}/footer.html`),
    ])
        .then(() => {
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