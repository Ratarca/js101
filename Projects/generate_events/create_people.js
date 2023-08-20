import * as PersonProps from './person_attributes.js';
import person_names from './person_name/names.json' assert {"type":"json"}


// TODO:HIGH: Import node modules, person, data from another folders etc...
class Person{
    constructor(gender, name, date_born, state_born,flag_parents, education, income){
        this.gender = gender;
        this.name = name;
        this.date_born = date_born;
        this.state_born = state_born;
        this.flag_parents = flag_parents;
        this.education = education;
        this.income = income;
    };
};


class EventsGeneratorJson{
    add(val1, val2){
        console.log(val1+val2)
    }
}

let json_manipulation = new EventsGeneratorJson
json_manipulation.add(1,2)