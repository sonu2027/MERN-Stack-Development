/*8. Adding a Method to a Prototype.
Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Mithun" and call the printDetails method. */

// Create the Student prototype
function Student(name) {
    this.name = name;
}

// Add the printDetails method to the prototype
Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object with the name "Mithun"
const mithun = new Student("Mithun");

// Call the printDetails method
mithun.printDetails(); // Output: "Hello, my name is Mithun"
