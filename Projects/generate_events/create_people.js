import * as PersonProps from './person_attributes.js';


// Use people + behavior
class Person{
    constructor(gender, name, date_born, state_born,flag_parents, education, income){
        this.gender = gender;
        this.name = name;
        this.date_born = date_born;
        this.state_born = state_born;
        this.flag_parents = flag_parents;
        this.education = education;
        this.income = income;
    }
}
// Writes

for (let i=0; i<=100; i++){
    let new_person = PersonProps.generatePersonProperties();
    console.log(i,new_person)
}
// gender, date_born, state_born, flag_parents, education, income