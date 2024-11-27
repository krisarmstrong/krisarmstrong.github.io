export const initContactForm = () => {
    const form = document.getElementById("form");
    const btn = document.getElementById("button");

    if (!form) {
        console.error("Form not found in the DOM.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        btn.textContent = "Sending...";

        const serviceID = "service_y3acoix"; // Your EmailJS service ID
        const templateID = "template_2twx09d"; // Your EmailJS template ID

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