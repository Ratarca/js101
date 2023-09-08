/* 
let my_array = [];

Methods
- push
- pop
- concat
- slice
- shift
- unshift
- map, filter, reduce
- forEAch*
*/

let driftCars = [`Chevette`, `318i`, `Trueno AE86` ]
let workCars = [`Chevette`, `Uno`, `Corsa`, `Fox`, `Impreza`]

console.log (`${driftCars} | ${workCars}`)

// FUNDAMENTALS
console.log( " \n # Fundamental Operations # \n" )
driftCars.push(`Marea`)
workCars.pop()
console.log(workCars.slice(1,3))

console.log (`${driftCars} | ${workCars}`)


// CONCAT
console.log( " \n # Concat two array # \n" )
let allCars = driftCars.concat(workCars)
console.log(allCars)

// REMOVE
console.log( " \n # Start Remove elements # \n" )
console.log( allCars.shift() )
console.log(allCars)
console.log( allCars.unshift() )

// Functions : map , filter, reduce