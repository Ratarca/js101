/*
    Beautiful documentation about 
    how basic declare types : string, number, boolean, objects
*/

let common_name = 'rafael';
let age = 28; 
let income = 25.759;
let fl_live = true;
const born = new Date('1994-01-01');


// Short comment about types and declare variables
console.log(born, typeof(born));
console.log(`${common_name} | ${typeof(common_name)}`);
console.log(`${age} | ${typeof(age)}`);
console.log(`${income} | ${typeof(income)}`);
console.log(`${fl_live} | ${typeof(fl_live)} \n`);

age = 30;
console.log(age)