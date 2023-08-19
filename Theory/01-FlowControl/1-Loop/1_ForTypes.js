/* 
Types Loop : For...of , For...in , For Conditions

    Key Differences:
    Purpose:

    for...in: Used to iterate over object properties.
    for...of: Used to iterate over iterable objects' values.
    Iterating Over:

    for...in: Iterates over enumerable properties, including inherited ones.
    for...of: Iterates over the values of an iterable object.
    Suitability:

    for...in: Not suitable for iterating over arrays due to potential issues with inherited properties.
    for...of: Ideal for iterating over arrays and other iterable objects.
    Syntax:

    for...in: Uses the syntax for (const key in object).
    for...of: Uses the syntax for (const value of iterable).
    Order:

    for...in: Does not guarantee a specific order for object properties.
    for...of: Iterates through iterable objects in the order they appear.
*/

// create simple for, iter on array, iter on object

let class_physics = ["newton","einstein","oppenheimen","henry cavendish","galileu","arquimedes","pitolomeu","maxwell","nikola tesla","santos dummont"]

// For..of
for (const physic_name of class_physics){
    console.log(physic_name)
}

// For..in
console.log("\n")
// For
for (i=0; i<=10; i++){
    console.log(i)
}




for (i=0; i < class_physics.length; i++){
    console.log(class_physics[i])
}