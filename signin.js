let submit = document.getElementById("submit-button");

submit.onclick = function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter a valid username and password!");
        return;
    }

    if (username === "Patrik" && password === "ACMilanUpdated") {
        document.getElementById("welcomemsg").textContent = "Welcome Patrik";
        document.getElementById("signintable").remove();
    } else if (username === "Frenk" && password === "DaliIsCool") {
        document.getElementById("welcomemsg").textContent = "Welcome Frenk";
        document.getElementById("signintable").remove();
    } else if (username === "Justi" && password === "Ilovefishing") {
        document.getElementById("welcomemsg").textContent = "Welcome Frenk";
        document.getElementById("signintable").remove();
    } else if (username === "Roni" && password === "RoniRoni") {
        document.getElementById("welcomemsg").textContent = "Welcome Roni";
        document.getElementById("signintable").remove();
    } else {
        alert("Invalid username or password!");
    }
};
