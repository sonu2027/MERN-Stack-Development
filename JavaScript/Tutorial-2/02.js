// Values and Datatypes

/*
Primitive data types (call by value):
1. number: 2 to power 53
2. bigint: To store big number
3. string
4. Boolean
5. undefined
6. null: stand alone value
7. Symbol : used for uniqueness

Non-primitive data types (call by reference):
1. array
2. object
3. functions
 */

/*
let, const and var
 */

// symbol example
const name = Symbol("sonu");
const anotherName = Symbol("sonu");
console.log("type of name symbol: ", typeof anotherName);
console.log(name == anotherName);

// array example
const arr = ["sonu", "67", 98, Boolean, undefined];
console.log("type of arr: ", typeof arr);
console.log(arr);

// Object example
const me = {
  name: "sonu",
  roll_no: 23,
  is18: true,
};
console.log("type of me: ", typeof me);
console.log(me);

// function example
// function can be trated as variable in js
const func = function count (name = "sonu mondal", roll_no = 56) {
  console.log(name + " and " + roll_no);
};
func();
console.log(typeof func);
console.log(func);
