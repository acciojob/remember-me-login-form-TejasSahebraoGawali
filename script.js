//your JS code here. If required.
let submitBtn = document.querySelector("#submit");
let loginBtn = document.querySelector("#existing");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let rememberMe = document.querySelector("#checkbox");

rememberMe.addEventListener("change", (e) => {
	if(e.target.checked) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else if(!e.target.checked) {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}

	const storedUsername = localStorage.getItem("username");

    if (storedUsername !== null) {
        loginBtn.style.display = "block";
    } else {
        
    }
})

submitBtn.addEventListener("click", () => {
	alert(`Logged in as ${username.value}`);
})

loginBtn.addEventListener("click", () => {
	alert("Logged in as <saved username>");
})
