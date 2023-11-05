/* 
(parameter1, parameter2, ..., parameterN) => {
    /Function body
    return expression; // Return statement (optional)
}

Notes
Arrow functions are a concise and useful addition to JavaScript, but they may not be suitable for all situations, 
particularly when dealing with complex function bodies or situations that require their own this context
*/

// With Parameter
const discount_price = (price) => {return price *0.9};

console.log(discount_price(100))

// Implicit return
const margem = (price) => {return price *1.1};

console.log(upper_price(100))