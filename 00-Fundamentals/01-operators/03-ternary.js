/*

condition ? "expr-true" : "expr-false"

*/

let check = (5 > 3) ? "Yes" : "No"; // result will be "Yes"

// Setting variables based on condition
const number = 7;

const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result); // "Odd"


// Valid input
const userAge = 25;
const isValidAge = userAge >= 18 && userAge <= 65 ? "Valid" : "Invalid";
console.log(isValidAge); // "Valid"

// Display based on condition
const isLoggedIn = true;
const greetingMessage = isLoggedIn ? "Welcome back!" : "Please log in to continue.";
console.log(greetingMessage); // "Welcome back!"