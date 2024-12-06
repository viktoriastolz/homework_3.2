"use strict";

let userName;
while (true) {
  const usersNameInput = prompt("Enter your name:");
  if (usersNameInput === null) {
    alert("Ok, bye");
    break;
  } else if (!usersNameInput.trim()) {
    alert("Error: Name cannot be empty or whitespace");
  } else if (!/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/.test(usersNameInput.trim())) {
    alert("Error: Name can only contain letters (Latin or Cyrillic)");
  } else if (/\s/.test(usersNameInput)) {
    alert("Error: Name cannot contain spaces");
  } else if (usersNameInput.length < 2) {
    alert("Error: Name must be at least 2 characters long");
  } else if (usersNameInput.length > 50) {
    alert("Error: Name must not exceed 50 characters");
  } else if (usersNameInput.trim().charAt(0) !== usersNameInput.trim().charAt(0).toUpperCase() || 
             usersNameInput.trim().slice(1) !== usersNameInput.trim().slice(1).toLowerCase()) {
    alert("Error: Name must start with a capital letter, and the rest must be lowercase");
  } else {
    userName = usersNameInput.trim();
    break;
  }
}

let userSurname;
while (userName) { 
  const usersSurnameInput = prompt("Enter your surname:"); 
  if (usersSurnameInput === null) {
    alert("Ok, bye");
    break;
  } else if (!usersSurnameInput.trim()) {
    alert("Error: Surname cannot be empty or whitespace");
  } else if (!/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/.test(usersSurnameInput.trim())) {
    alert("Error: Surname can only contain letters (Latin or Cyrillic)");
  } else if (/\s/.test(usersSurnameInput)) {
    alert("Error: Surname cannot contain spaces");
  } else if (usersSurnameInput.trim().charAt(0) !== usersSurnameInput.trim().charAt(0).toUpperCase() || 
             usersSurnameInput.trim().slice(1) !== usersSurnameInput.trim().slice(1).toLowerCase()) {
    alert("Error: Surname must start with a capital letter, and the rest must be lowercase");
  } else {
    userSurname = usersSurnameInput.trim();
    break;
  }
}

let userAge;
while (userName && userSurname) { 
  const usersAgeInput = prompt("Enter your age:"); 
  if (usersAgeInput === null) {
    alert("Ok, bye");
    break;
  } else if (!usersAgeInput.trim()) {
    alert("Error: Age cannot be empty or whitespace");
  } else if (/\s/.test(usersAgeInput)) {
    alert("Error: Age cannot contain spaces");
  } else if (isNaN(usersAgeInput)) {
    alert("Error: Age must be a valid number");
  } else {
    const age = +usersAgeInput;
    if (age <= 0 || age > 150) {
      alert("Error: Age must be between 1 and 150");
    } else {
      userAge = Math.floor(age);
      break;
    }
  }
}

if (userName && userSurname && userAge !== undefined) {
  alert(`Hello, ${userSurname} ${userName}! You are ${userAge} years old.`);
}
