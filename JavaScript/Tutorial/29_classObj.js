class product{
    // Properties -> variable -> Data member
    // We can run without declaring name, price and rating given below
    // name
    // price
    // rating

    // To make a variable private we need to declare variable with #
    #rating

    //Constructor will call automatically
    constructor(n, p, r){
        console.log("Calling the contructor");
        this.name=n
        this.price=p
        this.#rating=r
        // return 10 // If you are returning primitive then it will be avoided in constructor
        // return {x;10, y:"Sonu Mondal"} // If you will return non-primitive then it will be returned
        // return this // This is default which constructor will return always
    }
    // Note: In JavaScript there should be only one constructor (It can be default or custom but can be only one constructor) but in c++/Java there could be more than one constructor and thisconcept is called constructor overloadingin c++/Java

    // Behaviour -> Function -> Member function
    display() {
        //This refer to the calling object
        console.log(this);
        console.log("Displaying the current product", this.name, this.price, this.#rating);
    }

    // Static method can be called only with class name
    static custom(){
        console.log("Custom is calling");
    }
}

const p=new product("Iphone", 78500, 4.9) // new -> create an empty plain object
// In the above piece of code we are calling the constructor method

console.log("Printing product p: ", p);

// Calling display function
p.display()
// Calling static method
product.custom()


console.log("\nCreating another product");
const p1=new product()
console.log(p1);
p1.display()