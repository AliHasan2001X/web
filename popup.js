// JavaScript for Pop-Up Logic
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");

    // Input values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const password = document.getElementById("pwd").value.trim();
    const confirmPassword = document.getElementById("confirm-pwd").value.trim();

    let isValid = true;

    // Validate First Name
    if (firstName.length < 3 || !/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById("first-name-error").style.display = "block";
        isValid = false;
    }

    // Validate Last Name
    if (lastName.length < 3 || !/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById("last-name-error").style.display = "block";
        isValid = false;
    }

    // Validate Email
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Validate Phone Number
    if (!/^\d{8}$/.test(phoneNumber)) {
        document.getElementById("phone-number-error").style.display = "block";
        isValid = false;
    }

    // Validate Password
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    if (password.length < 10 || !hasUpperCase || !hasLowerCase) {
        document.getElementById("password-error").style.display = "block";
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").style.display = "block";
        isValid = false;
    }

    // Show Pop-Up if valid
    if (isValid) {
        const popup = document.getElementById("success-popup");
        popup.style.display = "flex"; // Show the Pop-Up
    }
});

// Close the Pop-Up
document.getElementById("close-popup").addEventListener("click", function () {
    const popup = document.getElementById("success-popup");
    popup.style.display = "none"; // Hide the Pop-Up
});
