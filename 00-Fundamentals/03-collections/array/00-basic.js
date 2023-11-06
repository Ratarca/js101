// Array 

const cohortDate = [7,14, 30, 45, 60, 90];
const customers = new Array('Ana', 'Alice', 'Adelaide')
const years = new Array();

//--- Core Methods : size, add / remove/ slice and forEach

// length
console.log(`Array: ${years} | Size: ${years.length}`)

// push == add in the end
years.push(2020)
years.push(2021)
years.push(2026)

console.log(years)

// pop == remove the last
years.pop()
console.log(years)
years.push(...[2022, 2023, 2024, 2025, 2026, 2027,2028])

// slice
console.log('\n Slice : ',years.slice(2, 5))