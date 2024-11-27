document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data; // Inject navbar
      console.log("Fetched Navbar Content:", data); // Log to see what’s fetched
      setupThemeToggle(); // Ensure this runs after the navbar loads
    })
    .catch((error) => console.error("Error loading navbar:", error));

  // Load Header
  fetch("components/header.html")
    .then((res) => res.text())
    .then((data) => (document.getElementById("header").innerHTML = data))
    .catch((error) => console.error("Error loading header:", error));

  // Load Footer
  fetch("components/footer.html")
    .then((res) => res.text())
    .then((data) => (document.getElementById("footer").innerHTML = data))
    .catch((error) => console.error("Error loading footer:", error));

  // Load Professional Summary
  fetch("components/professional-summary.html")
    .then((res) => res.text())
    .then(
      (data) =>
        (document.getElementById("professional-summary").innerHTML = data)
    )
    .catch((error) =>
      console.error("Error loading professional summary:", error)
    );

  // Load Key Highlights
  fetch("components/key-highlights.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("key-highlights").innerHTML = data)
    )
    .catch((error) => console.error("Error loading key highlights:", error));

  // Load Core Competencies
  fetch("components/core-competencies.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("core-competencies").innerHTML = data)
    )
    .catch((error) => console.error("Error loading core competencies:", error));
  
    // Load About Me Content (about.html)
  fetch("components/about-me.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("about-me").innerHTML = data)
    )
    .catch((error) => console.error("Error loading About Me:", error));

    fetch("components/key-achievements.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("key-achievements").innerHTML = data)
    )
    .catch((error) => console.error("Error loading Achievements:", error));

    fetch("components/what-drives-me.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("what-drives-me").innerHTML = data)
    )
    .catch((error) => console.error("Error loading What Drives Me:", error));


});

// Theme Setup Dark / Light (Dark is the default)
const setupThemeToggle = () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const navbar = document.querySelector(".navbar");

  if (!toggleButton) {
    console.error("Theme toggle button not found in the DOM.");
    return;
  }

  const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark
  const isDark = savedTheme === "dark";

  // Apply initial theme classes
  body.classList.add(
    isDark ? "bg-dark" : "bg-light",
    isDark ? "text-light" : "text-dark"
  );
  navbar.classList.add(
    isDark ? "navbar-dark" : "navbar-light",
    isDark ? "bg-dark" : "bg-light"
  );
  toggleButton.textContent = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
  toggleButton.classList.add(isDark ? "btn-outline-light" : "btn-outline-dark");
  toggleButton.classList.remove(
    isDark ? "btn-outline-dark" : "btn-outline-light"
  );

  // Attach toggle functionality
  toggleButton.addEventListener("click", () => {
    const isDark = body.classList.contains("bg-dark");

    body.classList.toggle("bg-dark", !isDark);
    body.classList.toggle("text-light", !isDark);
    body.classList.toggle("bg-light", isDark);
    body.classList.toggle("text-dark", isDark);

    navbar.classList.toggle("navbar-dark", !isDark);
    navbar.classList.toggle("bg-dark", !isDark);
    navbar.classList.toggle("navbar-light", isDark);
    navbar.classList.toggle("bg-light", isDark);

    toggleButton.textContent = isDark
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";
    toggleButton.classList.toggle("btn-outline-light", isDark);
    toggleButton.classList.toggle("btn-outline-dark", !isDark);

    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
};
