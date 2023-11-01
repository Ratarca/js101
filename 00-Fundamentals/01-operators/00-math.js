let macro_intersted = 0.1

// Personal informations
let age = 18;
let deposit = 100;
let cost_life = 1500;

/* 
THEORY: Math Operations
    Sum +
    Minus -
    Multiplicy * 
    Division /
*/
let good_deposit = deposit + 50
let bad_deposit = deposit - 50
console.log(`${good_deposit} | ${bad_deposit}`)

let cost_life_year = (cost_life * 12)
let cost_life_saving = (cost_life*3)/deposit
console.log(`${cost_life_year} | ${cost_life_saving}`)

// Using Math object : pow/ round
let investment_anual_deposit = deposit * Math.pow((1+macro_intersted), 11)
let round_investment = Math.round(investment_anual_deposit)
console.log(round_investment)

/* 
TASKS
    1-
    2-
    3-
    Challenge-
*/