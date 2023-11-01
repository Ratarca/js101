/*
Theory: Comparsion operators
Greater:      > , >=
Less:         < , <=
Equal:        ==, ===
Different:    !=

*/


let eggs_price = 12;
let meat_price = 32;
let chicken_price = 12;
let chocolate = '12';

console.log(`Comparsion eggs and meat   
        equal: ${eggs_price == meat_price}
        diffent: ${eggs_price != meat_price}
        great:${eggs_price > meat_price}
        less: ${eggs_price < meat_price}
`);


console.log(`Comparsion eggs and chicken   
        great:${eggs_price > chicken_price}
        great equal: ${eggs_price >= chicken_price}
        less: ${eggs_price < chicken_price}
        less  equal: ${eggs_price <= chicken_price}
`);


// VERIFY EGGS AND CHOCOLATE!

// Equal restrict : How the compiler know when use == and ===
console.log('Restriction: ', chicken_price==chocolate, chicken_price===chocolate );