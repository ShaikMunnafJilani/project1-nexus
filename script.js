const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInWrapper = document.querySelector('.signin-wrapper');
const signUpWrapper = document.querySelector('.signup-wrapper');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


signUpBtnLink.addEventListener('click', () => {
    signInWrapper.classList.add('hidden');
    signUpWrapper.classList.remove('hidden');
});

signInBtnLink.addEventListener('click', () => {
    signInWrapper.classList.remove('hidden');
    signUpWrapper.classList.add('hidden');
});

// form validation:

function validateSignupForm() {
	var mail = document.getElementById("signName").value;
	var name = document.getElementById("signEmail").value;
	var password = document.getElementById("signPassword").value;

    document.getElementById("errorMsg").innerHTML = "";
    
	if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	} else if(name.length < 3) {
        document.getElementById("errorMsg").innerHTML = "Your Username must include atleast 3 characters"
        return false;
    } else {
		alert("Successfully signed up");

        document.getElementById("signName").value = "";
        document.getElementById("signEmail").value = "";
        document.getElementById("signPassword").value = "";

		return true;
	}
}

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

    document.getElementById("errorMsg").innerHTML = "";

	if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully logged in");

        document.getElementById("logName").value = "";
        document.getElementById("logPassword").value = "";

		return true;
	}
}