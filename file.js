const passbox = document.getElementById("passbox");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const genbtn = document.getElementById("genbtn");

// Character sets
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "@-*_%$#&!";

// Slider value update
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate Password Function
function generatePassword() {
    let allChars = "";
    let password = "";

    if (lowercase.checked) allChars += lowerChars;
    if (uppercase.checked) allChars += upperChars;
    if (numbers.checked) allChars += numberChars;
    if (symbols.checked) allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    passbox.value = password;
}

// Button Click Event
genbtn.addEventListener("click", generatePassword);

// Generate password on page load
generatePassword();