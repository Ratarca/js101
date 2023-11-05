/* 
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing
    scope during the compilation phase, before the code is executed. 
    While this behavior may seem counterintuitive, it's essential to understand how JavaScript works.

Hoisting affects two main types of declarations: variable declarations and function declarations.
*/

// Functions
sayHello(); // Outputs: "Hello, world!"

function sayHello() {
    console.log("Hello, world!");
}

// Variables : When use (var) that 