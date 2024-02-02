/*
--> primitive data type uses stack and makes copy of data and don't change value at memo address
--> non-primitive data types uses heap memory so it do operation on memory address in js and change actual value
*/

// Stack memory
let name = "sonu mondal";
console.log(name);
let newname = name;
newname = "mandal sonu";
console.log(name);
console.log(newname);

// Heap memory
let user = {
  name: "sonu Mondal",
  email: "sonu.mondal@gmail.com",
};

console.log(user);

let newUser = user;
newUser.name = "Mondal Sonu"; // It will change the user.name
console.log(user);
