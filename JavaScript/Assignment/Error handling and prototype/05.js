/*5. Implementing a Person Class with Default Values
Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided. */

class person{
    #name="Unknown"
    #age=0
    constructor(n, a){
        this.#name=n
        this.#age=a
    }
    getDetails(){
        return `Name: ${this.#name}, Age: ${this.#age}`
    }
}

const p1=new person("Sonu Mondal", 21)
p1Details=p1.getDetails()
console.log(p1Details);

const p2=new person()
p2Details=p2.getDetails()
console.log(p2Details);