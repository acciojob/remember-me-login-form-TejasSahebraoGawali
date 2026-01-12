const submitBtn = document.querySelector("#submit");
const existingBtn = document.querySelector("#existing");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");

// Show existing user button on page load if data exists
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
	existingBtn.style.display = "block";
}

// Handle submit
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	alert(`Logged in as ${username}`);

	if (checkbox.checked) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		existingBtn.style.display = "block";
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existingBtn.style.display = "none";
	}
});

// Existing user login
existingBtn.addEventListener("click", () => {
	const storedUsername = localStorage.getItem("username");
	alert(`Logged in as ${storedUsername}`);
});
