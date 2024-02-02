// IIFE- Immediately Invoked Function Expression

// ********** Normal function *********
function sayHello() {
  console.log("Hello sonu!");
}
sayHello(); // If any IIFE is below then here semicolon is also mandatory



// ******* normal function to IIFE - named IIFE  *********
(function sayHelloIIFE() {
  console.log("Hello sonu!");
})(); // semicolon is mandatory to end the function execution


// ******* normal function to IIFE - unnamed IIFE **********
(function () {
  console.log("Hello sonu!");
})();

// ******** arrow function to IIFE - named IIFE ************
(namedIIFE = () => {
  console.log("Hello sonu!");
})();

// ********* arrow function to IIFE - unnamed IIFE **********
(() => {
  console.log("Hello sonu!");
})();
