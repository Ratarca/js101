/* Declaration

- A function declaration defines a named function using the function keyword.
- It is hoisted, which means it is moved to the top of its containing scope during the compilation phase, 
    allowing you to call the function before it's declared in the code.
- Function declarations can be used before they appear in the code.
- Function declarations have a name, making them self-referencing,
    and they are useful for creating reusable functions.
*/

function basic_show_msg(arg1, arg2){
    let basic_msg = `Suas msg sao as seguintes ${arg1} e ${arg2}`
    return basic_msg
};

console.log(basic_show_msg(1,2));

/* Expression

- A function expression defines a function as part of an expression and assigns it to a variable or a property of an object.
- It is not hoisted in the same way as function declarations. You can only use a function expression after it has been defined in the code.
- Function expressions are often used for anonymous functions (functions without a name) or for creating functions dynamically.
*/

const my_function = function somar_valores(valor_1, valor_2){
                        return valor_1 + valor_2
                    };

console.log(my_function(10, 10));