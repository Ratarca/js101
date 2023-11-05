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

class WarPlane extends Plane{
    constructor(max_vel, brand, qt_missel){
        super(max_vel, brand); // Call the superclass constructor
        this.qt_missel = qt_missel
    }

    shot(){
        if (this.qt_missel <= 0){
            console.log('Nothing to shot')
        }else{
            this.qt_missel = this.qt_missel - 1
            console.log(`Shoting, we had ${this.qt_missel}`)
        }
    }
}

let mik = new WarPlane(1700, 'Mikoyan', 7)