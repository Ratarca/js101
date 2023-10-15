function check_age(born_year, current_year){
    return current_year-born_year
}

let currentYear = 2023
let bornYear = 1994
let age = check_age(bornYear, currentYear)

console.log(age)