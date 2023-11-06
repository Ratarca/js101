/* The forEach method in JavaScript is used to iterate over the elements of an array 
    and perform a specified action (callback function) on each element 
    

    # Syntax
    > array.forEach(callback(currentValue, index, array), thisArg);
*/

let itemsPrice = new Array(1,2,3,4,5,6,7,8);
let newPrice = new Array();

itemsPrice.forEach( (value) => newPrice.push(value*1.2) )
console.log(newPrice)