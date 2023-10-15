// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

let investimentValue = 100
let interestRate = 0.13
let year = 7 

let item = 250

// Arihmetic Operators : + , - , * , / , %

let interest = (1 + interestRate)
let presentValue = investimentValue / (Math.pow( (1+interestRate), year) )
console.log(`Present value is: ${Math.round(presentValue)}`)

// Comparsions Operators : 
let fish = 100
let coconut = 70
let banana = '70'

console.log(`Fish and coconut: `,fish != coconut, fish == coconut , fish < coconut, fish <= coconut)

console.log(`Banana and coconut 1:`, coconut == banana, coconut != banana)
console.log(`Banana and coconut 2:`, coconut === banana, coconut !== banana)



/* Logical Operators  
    AND : &&
    OR  : ||
    NOT : !
*/


/* Ternary Operators
condition ? exprIfTrue : exprIfFalse
*/

let age = 18
const beverage = age >= 21 ? "Beer" : "Juice"
console.log(beverage)

