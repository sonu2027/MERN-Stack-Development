/*2. Building Robust Functions in JavaScript
Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs. */

function getPerson(person) {
  try {
    console.log(person);
  } catch {
    console.log("Invalid parameter type");
  }
}
let person1 = {
  name: "Sonu Mondal",
  age: 21,
};
getPerson(person1);
let person2 = {
  name: "Bipin Mondal",
};
getPerson(person2);
let person3 = ["name", "sonu"];
getPerson(person3);
