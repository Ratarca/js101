/*  
    Math Operators
    price = price + work 
*/

let gas_on_tank = 10
let km_per_liter = 10
let distance_work = 100

let car_walk = gas_on_tank * km_per_liter
let km_travel =  car_walk - (distance_work * 2) 

console.log(km_travel)

let maxVelocityCar = 100
let maxVelocityRoad = 50

let velocityPercentage = ((maxVelocityCar- maxVelocityRoad)/ maxVelocityCar )*100

console.log(`${velocityPercentage}%`)