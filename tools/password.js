const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", checkPassword);

function checkPassword() {
    const password = passwordInput.value;

    let score = 0;

    // Rules
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    if (hasLength) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSymbol) score++;

    updateTips(hasLength, hasUpper, hasNumber, hasSymbol);
    updateStrength(score);
}

function updateTips(length, upper, number, symbol) {
    document.getElementById("length").style.color = length ? "lightgreen" : "#94a3b8";
    document.getElementById("upper").style.color = upper ? "lightgreen" : "#94a3b8";
    document.getElementById("number").style.color = number ? "lightgreen" : "#94a3b8";
    document.getElementById("symbol").style.color = symbol ? "lightgreen" : "#94a3b8";
}

function updateStrength(score) {
    let width = (score / 4) * 100;

    strengthFill.style.width = width + "%";

    if (score === 0) {
        strengthText.innerText = "Strength: -";
        strengthFill.style.background = "transparent";
    } else if (score === 1) {
        strengthText.innerText = "Weak";
        strengthFill.style.background = "red";
    } else if (score === 2) {
        strengthText.innerText = "Fair";
        strengthFill.style.background = "orange";
    } else if (score === 3) {
        strengthText.innerText = "Good";
        strengthFill.style.background = "yellow";
    } else {
        strengthText.innerText = "Strong";
        strengthFill.style.background = "green";
    }
}

function generate() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";

    for (let i = 0; i < 12; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordInput.value = pass;
    checkPassword();
}