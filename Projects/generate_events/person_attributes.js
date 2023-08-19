function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


//Gender
function generateGender(){
    let fmt_gender = null
    let gender = randomInteger(1,2)
    
    if (gender == 1){
        fmt_gender = `Male`
    }else{
        fmt_gender = `Female`
    };

    return fmt_gender
};

function generateName(){
    return 777
};

// Age: (random)
function generateBornDate() {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 80;

    const randomYear = Math.floor(Math.random() * 80) + minYear;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming all months have 28 days for simplicity

    const randomDate = new Date(randomYear, randomMonth - 1, randomDay);
    return randomDate;
};

// Location:(random)
function generateLocation(){
    function allLocations(){
        let rich_location = [`SP`,`GO`,`RJ`, `MG`]
        let poor_location = [`MA`,`AM`,`AC`, `BA`,`CE`,`RS`, `SC`]
        let all_location = [...rich_location, ...poor_location]
        return all_location
    };
        
    let all_locations = allLocations()
    let size_locations = all_locations.length -1
    let location = all_locations[randomInteger(0, size_locations)]
    return location
};

// Parents:(random)
function generateParents(){
    let flag_parents = randomInteger(0,100)
    if (flag_parents >= 10){
        return true
    }else{
        return false
    };
};

// name:(gender, random)
// education: (parents, location)
function _statisticGeography(){
    return 777
}


//  TODO:MEDIUM: Function will determinate a education
function generateEducation(has_parents, geograph, born_date){
    let education_degree = [`low`,`normal`, `medium`,`high`, `rare`]
    return education_degree[ randomInteger(0,(education_degree.length-1)) ]
};

// TODO: HIGH: Function will determinate a income
function generateIncome(has_parents, geograph, education){
    return 1010
};

// Person Properties
function generatePersonProperties(){
    let gender = generateGender()
    let name = generateName()
    let born = generateBornDate()
    let location = generateLocation()
    let flag_parents = generateParents()
    let education = generateEducation(flag_parents,location)
    let income = generateIncome(flag_parents,location, education)

    let person_props = {gender:gender, name:name, born:born, location:location, flag_parents:flag_parents,
                        education:education, income:income}

    return person_props
}

console.log(generatePersonProperties())
export {generatePersonProperties};