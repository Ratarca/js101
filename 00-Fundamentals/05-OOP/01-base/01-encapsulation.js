/* 
Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP), 
and it refers to the concept of bundling data (attributes) and the methods (functions) 
that operate on that data into a single unit, known as a class. In JavaScript, which supports OOP,
you can achieve encapsulation using various techniques to control access 
to class members (attributes and methods).

=> Private Properties and Methods
*In JavaScript, you can use closures and scope to create private properties and methods. These are not directly accessible from outside the class.

*Private properties and methods are often prefixed with an underscore (_) to indicate that they should not be accessed directly.

=> Getter and setter
*JavaScript allows you to define getter and setter methods to control access to properties. 
This is particularly useful when you want to enforce validation or additional logic when getting or setting a property.
*/

//

class Employee{
    constructor(firm, wage){
        this._firm = firm;
        this._wage = wage;
    }

    // Private method
    _calculateWage(days_work) {
        let totalWage = this._wage * days_work;
        return totalWage
    }
        
    // Get is return property
    getWage(){
        return this._wage;
    }

    // Set new firm
    setFirm(newFirm){
        this._firm = newFirm;
    }

};

ratarca = new Employee('ITAU', 1300)
console.log(ratarca._calculateWage(10))
