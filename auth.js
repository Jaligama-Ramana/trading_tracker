// Store users
function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username]) {
        alert("User already exists");
        return false;
    }

    users[username] = { password };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "index.html";
}

// Login
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (!users[username] || users[username].password !== password) {
        alert("Invalid credentials");
        return false;
    }

    localStorage.setItem("currentUser", username);
    window.location.href = "home.html";
}

// Logout
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// Protect pages
function checkAuth() {
    const user = localStorage.getItem("currentUser");
    if (!user) {
        window.location.href = "index.html";
    }
}