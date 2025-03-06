
        document.addEventListener("DOMContentLoaded", function () {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberCheckbox = document.getElementById("checkbox");
            const submitButton = document.getElementById("submit");
            const existingButton = document.getElementById("existing");
            const loginForm = document.getElementById("loginForm");

            // Check if credentials exist in localStorage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingButton.style.display = "block";
            }

            loginForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;

                alert("Logged in as " + username);

                if (rememberCheckbox.checked) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    existingButton.style.display = "block";
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    existingButton.style.display = "none";
                }
            });

            existingButton.addEventListener("click", function () {
                alert("Logged in as " + savedUsername);
            });
        });