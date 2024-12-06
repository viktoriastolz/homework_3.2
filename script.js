const string1 = prompt("Enter your name:");
const string2 = prompt("Enter your surname:");
const string3 = prompt("Enter your age:");

if (!string1 || !isNaN(string1)) {
  alert("Invalid input: Name must be a non-empty string.");
} else if (!string2 || !isNaN(string2)) {
  alert("Invalid input: Surname must be a non-empty string.");
} else if (!string3 || isNaN(string3) || Number(string3) <= 0) {
  alert("Invalid input: Age must be a positive number.");
} else {
  alert(`${string3}, ${string1}, ${string2}`);
}

