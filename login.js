function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        alert("Login successful!");
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        alert("Login Fail");
    }
}