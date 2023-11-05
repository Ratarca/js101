// What is spread?

let bank_stocks = ['ITUB4', 'BPAC11', 'BBAS3', 'BBDC4'];
let duplicate_banks = [bank_stocks, ...bank_stocks]

console.log(duplicate_banks)
console.log(...bank_stocks)

// REST: Technique to work undefined parameters on functions