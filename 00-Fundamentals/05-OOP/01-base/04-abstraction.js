// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target

class Shape {
    constructor() {
        if (new.target === Shape) {
        throw new Error('Shape class cannot be instantiated directly.');
        }
    }

    // Abstract method
    calculateArea() {
        throw new Error('Subclasses must implement the calculateArea method.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}