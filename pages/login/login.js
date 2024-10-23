document.querySelector(".loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;

    let storedEmail = localStorage.getItem('Email');
    let storedPassword = localStorage.getItem('password');

    if (userEmail && userPassword) {
        if (userEmail === storedEmail && userPassword === storedPassword) {
            displayAlert("Welcome to the Home page!", "alert-success");
            setTimeout(() => {
                window.location.href = "/index.html";
            }, 2000);
        } else {
            displayAlert("Something went wrong!", "alert-danger");
            resetForm();
        }
    } else {
        displayAlert("Oops! Something went wrong. Please try again later", "alert-danger");
        resetForm();
    }
    console.log(userEmail, userPassword);
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
}