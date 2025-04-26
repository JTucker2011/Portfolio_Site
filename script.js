// Enable keyboard navigation for links
document.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        document.activeElement.classList.add("focused");
    }
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let isValid = true;

    // Name Validation
    let nameInput = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameInput.style.border = "1px solid red";
        isValid = false;
    } else {
        nameError.textContent = "";
        nameInput.style.border = "1px solid green";
    }

    // Email Validation
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address.";
        emailInput.style.border = "1px solid red";
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.style.border = "1px solid green";
    }

    // Message Validation
    let messageInput = document.getElementById("message");
    let messageError = document.getElementById("messageError");
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message cannot be empty.";
        messageInput.style.border = "1px solid red";
        isValid = false;
    } else {
        messageError.textContent = "";
        messageInput.style.border = "1px solid green";
    }

    // If all fields are valid, display success message
    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
            document.getElementById("contactForm").reset();
        }, 3000);
    }
});
// Dark Mode Toggle Function
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
}

// Toggle Dark Mode on Button Click
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save user preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        themeToggle.textContent = "☀️ Toggle Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        themeToggle.textContent = "🌙 Toggle Dark Mode";
    }
});