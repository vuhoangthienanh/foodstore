console.log(localStorage.getItem("userpass"))

document.querySelector("#demo").onclick = function () { login() };
function login() {
    let name = document.getElementById("name2").value;
    let pass = document.getElementById("pass2").value;

    let users = JSON.parse(localStorage.getItem("userpass")) || [];

    let matchedUser = users.find(user => user.name === name && user.pass === pass);

    if (matchedUser) {
        localStorage.setItem("currentuser", name);
        location.href = "fs_mainindex.html";
    } else {
        alert("Wrong username or password");
    }
}
