document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Retrieve saved username
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        existingButton.style.display = "block";
        usernameInput.value = savedUsername;  // Pre-fill username
        rememberCheckbox.checked = true;  // Auto-check "Remember Me"
    }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Check for empty input
        if (!username || !password) {
            alert("Error: Both username and password are required!");
            return;
        }

        alert("Logged in as " + username);

        if (rememberCheckbox.checked) {
            localStorage.setItem("username", username);
            existingButton.style.display = "block";
        } else {
            localStorage.removeItem("username");
            existingButton.style.display = "none";
        }
    });

    existingButton.addEventListener("click", function () {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            alert("Logged in as " + savedUsername);
        }
    });
});
