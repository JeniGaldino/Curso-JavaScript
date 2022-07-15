class Spaceship {
    constructor(name,crewQuantity){
        this.name= name
        this.crewQuantity= crewQuantity
        this.currentVelocity=0
        this.break= 0.17
    }
    static speedUp(acceleration){
    this.currentVelocity+=acceleration*(1-this.break)
    }
}