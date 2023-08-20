import * as PersonProps from './person_attributes.js';
import * as fs from 'fs'
import path from 'path'
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
        this.income = income
    };
};


function build_people(quantity_person){
    let person_sample = [];

    for (let idx =0; idx < quantity_person; idx++){
        let person_properties = PersonProps.generatePersonProperties();
        person_sample.push(person_properties);
    };

    return person_sample;
}

function get_date(){
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
    return formattedDate
}

// Write
function write_people_json(people_sample, file_name){
    let jsonData = JSON.stringify(people_sample,null, 2);
    const pathFile =  `Projects/generate_events/storage/${get_date()}_${file_name}.json`;

    fs.writeFile(pathFile, jsonData, (err)=>{
        if (err){
            console.log(`Erro on write json: ${err}`);
        }else{
            console.log(`JSON data has been written to ${pathFile}`);
        };
    });
}

// execution
let sample_people = build_people(100)
write_people_json(sample_people, 'people')