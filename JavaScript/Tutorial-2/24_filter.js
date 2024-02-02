/*
--> forEach() is called higher order array loops
--> it except a function and this function is called callback function
--> Callback function doesn't have any name
--> filter() return the value if the condition meet
*/

// Explicit return in arrow function
const func1 = function () {
  const arr = [4, 1, 0, 3, 2, 6, 5, 9];
  const returnvalue = arr.filter((num) => {
    return num > 4;
  });
  console.log(returnvalue);
};
func1();

// Implicit return in arrow function
const func2 = function () {
  const arr = [4, 1, 0, 3, 2, 6, 5, 9];
  const returnvalue = arr.filter((num) => num > 2);
  console.log(returnvalue);
};
func2();
