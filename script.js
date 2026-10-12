
document.getElementById("studentForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        registerStudent();
    }
);

function registerStudent() {

    var name = document.getElementById("studentName").value.trim();
    var roll = document.getElementById("rollNumber").value.trim();
    var email = document.getElementById("email").value.trim();
    var eventName = document.getElementById("event").value;

    var message = document.getElementById("message");

    if (name == "" || roll == "" || email == "" || eventName == "") {
        message.textContent = "Please fill all required fields!";
        message.style.color = "red";
    }
    else if (!document.getElementById("email").checkValidity()) {
        message.textContent = "Please enter a valid email address!";
        message.style.color = "red";
    }
    else {
        message.textContent =
            "Congratulations " + name +
            "! You have successfully registered for " +
            eventName + ".";

        message.style.color = "green";
    }
}

function changeFont() {
    document.getElementById("heading").style.fontSize = "45px";
}

function toggleForm() {
    var form = document.getElementById("registrationForm");

    if (form.style.display == "none") {
        form.style.display = "flex";
    }
    else {
        form.style.display = "none";
    }
}
