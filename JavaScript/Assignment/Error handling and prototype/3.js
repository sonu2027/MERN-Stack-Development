/* 3. Car Description Class.
Create a class called Car with three properties: company, model, and year. The class should have a methodncalled getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate anninstance of the Car class and call the getDescription method.*/

class car{
    #company
    #model
    #year
    constructor(y, c, m){
        this.#year=y
        this.#company=c
        this.#model=m
    }
    getDescription(){
        return `This is a ${this.#year}, ${this.#company}, ${this.#model}`
    }
}
const c1=new car(2008, "BMW", "SX02")
carDescription=c1.getDescription()
console.log(carDescription);