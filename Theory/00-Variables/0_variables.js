// Single Line comment

/*
Multi line comment
Some time is useful
*/

let intro = "Hello World"
let my_name = "Ratarca"
let full_message = `${intro} ${my_name}`

let brazil_age = 600

let ratarca = {
    name:"rafael targino",
    age:18,
    income:900.777,
    has_car: false,
    address: {
        country:"Brasil",
        city:"SP"
    }
}

console.log(full_message)
console.log(`${ratarca.age} | ${ratarca.address.city} | ${ratarca}`,ratarca)
