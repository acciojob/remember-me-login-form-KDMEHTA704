document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Retrieve saved username
    const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block";
        usernameInput.value = savedUsername;  
		passwordInput.value = savedPassword;
    }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
		const rememberMe = rememberCheckbox.checked;

        // Check for empty input
        if (!username || !password) {
            alert("Error: Both username and password are required!");
            return;
        }

        alert("Logged in as " + username);

        if (rememberMe) {
            localStorage.setItem("username", username);
			localStorage.setItem('password', password);
            existingButton.style.display = "block";
        } else {
            localStorage.removeItem("username");
			localStorage.removeItem('password');
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
