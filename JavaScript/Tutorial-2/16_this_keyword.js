const user = {
  name: "sonu mondal",
  salary: 1000,
  greet: function () {
    console.log(`${this.name}, welcome to website!`);
    console.log(this); // Here, this refer to current object user
  },
};

user.greet()
user.name="another user"
user.greet()

console.log(this) // Here, this refer to window (global) object

// this in function
const thisInFunc= function (){
    console.log(this);
}
// thisInFunc()

// arrow function and this in arrow function
const arrowFunction=()=>{
    console.log(this);
}
arrowFunction()