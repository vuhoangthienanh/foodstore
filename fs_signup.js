document.querySelector("#demo").onclick = function () { check() };

function check() {
    let name = document.getElementById("name").value;
    let info = document.getElementById("info").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;

    if (name.length == 0 || info.length == 0 || pass.length == 0 || repass.length == 0 || dob.length == 0 || gender == "Gender") {
        alert("Complete your form");
        return;
    }

    if (name.length < 6) {
        alert("Name must contain at least 6 letters");
        return;
    }

    if (pass.length < 6) {
        alert("Password must contain at least 6 letters");
        return;
    }

    if (repass !== pass) {
        alert("Passwords must match");
        return;
    }

    let users = JSON.parse(localStorage.getItem("userpass")) || [];

    let exists = users.some(user => user.name === name);
    if (exists) {
        alert("Username already exists");
        return;
    }

    users.push({ name, pass });
    localStorage.setItem("userpass", JSON.stringify(users));

    console.log("Redirecting to login page...");
    location.href = "fs_signin.html";
}
