/* 
Theory: Logic Theory
AND = && 
OR = ||
NOT = !

*/

const fl_authentication = true;
const fl_authorization = false;

let login_system_1 = fl_authentication && fl_authorization;
let login_system_2 = fl_authentication || fl_authorization;

console.log('Login on Sys1: ',login_system_1);
console.log('Login on Sys2: ',login_system_2);

console.log(fl_authorization, !fl_authorization)