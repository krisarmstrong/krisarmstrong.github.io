document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("PinoAlZtG1dygd7XH"); // Replace with your public key

    const btn = document.getElementById("button");
    const form = document.getElementById("form");

    if (!form) {
        console.error("Form not found in the DOM.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        btn.textContent = "Sending..."; // Update button text

        const serviceID = "service_y3acoix"; // Your service ID
        const templateID = "template_2twx09d"; // Your template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = "Send Email"; // Reset button text
                alert("Your message has been sent successfully!");
                form.reset(); // Clear the form fields
            })
            .catch((err) => {
                btn.textContent = "Send Email"; // Reset button text
                alert("Failed to send the message. Please try again later.");
                console.error("EmailJS error:", err);
            });
    });
});