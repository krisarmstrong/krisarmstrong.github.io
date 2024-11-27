const cache = new Map(); // Cache to optimize content fetching

export const loadContent = (id, url, callback) => {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID "${id}" not found.`);
        return Promise.resolve(); // Skip if element doesn't exist
    }

    // Check cache before making a network request
    if (cache.has(url)) {
        element.innerHTML = cache.get(url);
        if (callback) callback(); // Execute callback after loading cached content
        return Promise.resolve();
    }

    return fetch(url)
        .then((res) => res.text())
        .then((data) => {
            element.innerHTML = data || "<p>Content unavailable.</p>";
            cache.set(url, data); // Save fetched content to cache
            if (callback) callback(); // Execute callback after content is loaded
        })
        .catch((error) => {
            element.innerHTML = "<p>Failed to load content. Please try again later.</p>";
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
        loadContent("navbar", "components/navbar.html", ensureStickyBehavior).catch(() =>
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
                return loadContent("contact-form", "components/contact-form.html", setupContactForm).catch(() =>
                    console.error("Failed to load contact-form")
                );
            default:
                console.warn(`No content defined for pageId: ${pageId}`);
                return Promise.resolve();
        }
    });
};

const ensureStickyBehavior = (element) => {
    if (!element.classList.contains("sticky-top")) {
        element.classList.add("sticky-top");
    }
    console.log("Sticky behavior ensured for navbar.");
};

const setupContactForm = () => {
    const form = document.getElementById("form");
    const btn = document.getElementById("button");

    if (!form) {
        console.error("Form not found in the DOM after dynamic load.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        btn.textContent = "Sending...";

        const serviceID = "service_y3acoix"; // Replace with your service ID
        const templateID = "template_2twx09d"; // Replace with your template ID

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.textContent = "Send Email";
                alert("Your message has been sent successfully!");
                form.reset();
            })
            .catch((err) => {
                btn.textContent = "Send Email";
                alert("Failed to send the message. Please try again later.");
                console.error("EmailJS error:", err);
            });
    });
};