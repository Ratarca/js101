class Plane{
    constructor(max_vel, brand){
        this.max_vel = max_vel
        this.brand = brand
    }

    fly(){
        let speed = this.max_vel/10
        console.log(`FLY ON THIS SPEED: ${speed}`)
    }
}

class ComercialPlane extends Plane{
    constructor(max_vel, brand, qt_people){
        super(max_vel, brand);
        this.qt_people = qt_people;
    }

    fly(){
        let speed = this.max_vel/20
        console.log(`Secure mode to fly we has people`)
    }
}

let boeing = new ComercialPlane(750, 'boeing', 80)
boeing.fly()