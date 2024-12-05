// const string1 = prompt("Enter your name:");
// const string2 = prompt("Enter your surname:");
// const string3 = prompt("Enter your age:");

// alert(`${string3}, ${string1}, ${string2}`);

"use strict";

function isValidName(name) {
    return /^[a-zA-Z]+$/.test(name.trim());
}

function isValidAge(age) {
    return /^\d+$/.test(age.trim()) && parseInt(age, 10) > 0 && parseInt(age, 10) <= 120;
}

function getValidatedInput(promptText, validationFunction) {
    let input;
    do {
        input = prompt(promptText).trim();
        if (!validationFunction(input)) {
            alert("Invalid input. Please try again.");
        }
    } while (!validationFunction(input));
    return input;
}

const name = getValidatedInput("Enter your name:", isValidName);
const surname = getValidatedInput("Enter your surname:", isValidName);
const age = getValidatedInput("Enter your age:", isValidAge);

alert(`${age}, ${name}, ${surname}`);

