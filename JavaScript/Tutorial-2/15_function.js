// Type-1
function printHello() {
  console.log("Hello");
}
printHello; // function reference
printHello(); // Executing function

function username(name) {
  // parameter
  if (!name) return `Please enter your name`;

  return `${name} just logged in`;
}
console.log(username("")); // arguments

// Rest operator (...)
// NOTES: Rest and Spread both are same but usecases are different

function calculateCartPrice(...num) {
  // here rset operator make a array of all arguments
  let totalPrice = 0;

  // traversing on num
  for (let i in num) {
    totalPrice += num[i];
  }
  return totalPrice;
}

console.log("Total price: ", calculateCartPrice(89, 66, 55, 99));

// function with object
function obj(anyObj) {
  const { name: n, salary: s } = anyObj;
  console.log(`${n} and ${s}`);
}
const user = {
  name: "sonu",
  salary: 100000,
};
obj(user);

// Closure in short: Inner function can access the variable of outside function but outside can't

// Type -2
const func = function () {
  console.log("hello sonu");
};
func();

// difference in type1 and type2
const diff = function () {
  // Type -1
  sayHello();
  function sayHello() {
    console.log("hello!");
  }

  func();
  const func = function () {
    console.log("hello sonu");
  };
  //   func()
};
// and this is the concept of hoisting
diff();
