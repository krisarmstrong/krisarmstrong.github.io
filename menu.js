// Select the toggle button and menu
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

// Add click event to toggle the menu visibility
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open'); // Add or remove the "show" class
});