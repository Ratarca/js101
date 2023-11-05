class Person{
    // Constructor method to initialize object properties
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Instance method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const ratarca = new Person('ratarca', 27);
const henrique = new Person('henrique', 18);