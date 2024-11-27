export const loadContent = (id, url) => {
  const element = document.getElementById(id);
  if (!element) return Promise.resolve(); // Skip if element doesn't exist
  return fetch(url)
    .then((res) => res.text())
    .then((data) => {
      element.innerHTML = data;
      console.log(`Loaded content for ${id}`);
    })
    .catch((error) => console.error(`Error loading ${id}:`, error));
};

export const initContentLoader = () => {
  const pageId = document.body.getAttribute("data-page");

  if (!pageId) {
    console.error("No data-page attribute found on <body>.");
    return Promise.resolve(); // Return resolved promise to avoid blocking
  }

  // Load shared components (navbar, footer, etc.)
  return Promise.all([
    loadContent("navbar", "components/navbar.html"),
    loadContent("header", "components/header.html"),
    loadContent("footer", "components/footer.html"),
  ]).then(() => {
    // Load page-specific content
    switch (pageId) {
      case "index":
        return Promise.all([
          loadContent(
            "professional-summary", 
            "components/professional-summary.html"
          ),
          loadContent(
            "key-highlights", 
            "components/key-highlights.html"),
          loadContent(
            "core-competencies", 
            "components/core-competencies.html"),
        ]);
      case "certification":
        return Promise.all([
          loadContent(
            "security-certification", 
            "components/security-certification.html"
          ),
          loadContent(
            "wireless-certification", 
            "components/wireless-certification.html"
          ),
          loadContent(
            "network-certification", 
            "components/network-certification.html"
          ),
        ]);
      case "about":
        return Promise.all([
          loadContent(
            "about-me", 
            "components/about-me.html"),
          loadContent(
            "key-achievements", 
            "components/key-achievements.html"),
          loadContent(
            "what-drives-me", 
            "components/what-drives-me.html"),
        ]);
      case "contact":
        return loadContent("contact-form", "components/contact-form.html");
      default:
        console.warn(`No content defined for pageId: ${pageId}`);
        return Promise.resolve(); // Return resolved promise
    }
  });
};
