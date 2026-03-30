const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Login successful!");
            window.location.href = "home.html";
        }
    });
}

const range = document.getElementById("numTravellers");
const rangeValue = document.getElementById("rangeValue");

if (range) {
    range.addEventListener("input", function () {
        let text = this.value == 1 ? "person" : "people";
        rangeValue.textContent = this.value + " " + text;
    });
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let travellers = document.getElementById("numTravellers").value;

        if (name === "" || email === "" || !gender) {
            alert("Please fill all fields!");
        } else {
            alert(
                `Booking Successful!

Name: ${name}
Email: ${email}
Travellers: ${travellers}`
            );
        }
    });
}