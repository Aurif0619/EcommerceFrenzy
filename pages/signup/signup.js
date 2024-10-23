document.querySelector(".signUpForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    console.log(userEmail, userPassword, confirmPassword);

    if (userEmail && userPassword && confirmPassword) {
        if (userPassword !== confirmPassword) {

            displayAlert("Password and Confirm password don't match!", "alert-danger");
            resetForm();
            return;
        }
        localStorage.setItem("Email", userEmail);
        localStorage.setItem("password", userPassword);
        localStorage.setItem("confirmPassword", confirmPassword);

        displayAlert("Sign Up Successful!", "alert-success");

        setTimeout(function () {
            window.location.href = "/pages/login/login.html";
        }, 2000);

        resetForm();
    } else {
        displayAlert("Please fill in all the fields before submitting!", "alert-danger");
        resetForm();
    }
});

function displayAlert(message, className) {
    document.getElementById("alertMessage").innerHTML = message;
    document.getElementById("alertMessage").classList.add(className);
    setTimeout(() => {
        document.getElementById("alertMessage").innerHTML = "";
        document.getElementById("alertMessage").classList.remove(className);
    }, 2000)
}

function resetForm() {
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("confirmPassword").value = "";
}
