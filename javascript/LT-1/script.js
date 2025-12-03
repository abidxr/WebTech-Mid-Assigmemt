const fullNameInput = document.getElementById("fullNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const phoneNumberInput = document.getElementById("phoneNumberInput");

const fullnameErr = document.getElementById("fullnameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const confirmPasswordErr = document.getElementById("confirmPasswordErr");
const phoneNumberErr = document.getElementById("phoneNumberErr");

const form = document.getElementById("form");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
        alert("Registration Successful")

        fullNameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
        phoneNumberInput.value = "";
    }
})

function validateForm() {
    let isErr = false;

    fullnameErr.innerHTML = "";
    emailErr.innerHTML = "";
    passwordErr.innerHTML = "";
    confirmPasswordErr.innerHTML = "";
    phoneNumberErr.innerHTML = "";

    if (fullNameInput.value.trim() === "") {
        isErr = true;
        fullnameErr.innerHTML = "Full name cannot be empty"
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.trim() === "") {
        isErr = true;
        emailErr.innerHTML = "Email cannot be empty"
    } else {
        if (!emailPattern.test(emailInput.value)) {
            isErr = true;
            emailErr.innerHTML = "Email should follow the email pattern";
        }
    }

    if (passwordInput.value.trim() === "") {
        isErr = true;
        passwordErr.innerHTML = "Password cannot be empty";
    } else if (passwordInput.value.length < 6) {
        isErr = true;
        passwordErr.innerHTML = "Password must be at least 6 characters";
    }


    if (confirmPasswordInput.value.trim() === "") {
        isErr = true;
        confirmPasswordErr.innerHTML = "Confirm Password cannot be empty";
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        isErr = true;
        confirmPasswordErr.innerHTML = "Password do not match with Confirm Password";
    }

    if (phoneNumberInput.value.trim() === "") {
        isErr = true;
        phoneNumberErr.innerHTML = "Phone number cannot be empty"
    } else if (isNaN(phoneNumberInput.value)) {
        isErr = true;
        phoneNumberErr.innerHTML = "Phone number should contain only numbers"
    }

    return !isErr;

}
