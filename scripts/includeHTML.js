// includeHTML.js

// Include external HTML for navigation
function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        if (file) {
            const response = await fetch(file);
            if (response.ok) {
                el.innerHTML = await response.text();
            } else {
                el.innerHTML = "Error loading file.";
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", includeHTML);