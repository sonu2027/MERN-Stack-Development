/*
--> map() is called higher order array loops
--> it except a function and this function is called callback function
--> Callback function doesn't have any name
--> map return all the value
--> If there will be any condition then its return true or false and in if condition if codition not meet then return undefined
--> It doesn't change the catual array
*/

const func1 = function () {
  const arr = [5, 4, 8, 0, 2, 3, 7];
  const returnValue = arr.map((num) => {
    if (num > 5) {
      return num;
    }
  });
  console.log(returnValue);
  console.log(arr);
};
// func1();

// Chaning in maps
// Example 1
const func2 = function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const returnValue = arr.map((num) => num * 10).map((number) => number + 1);
  console.log(returnValue);
};
// func2()

// Example 1
const func3 = function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const returnValue = arr
    .map((num) => num * 10)
    .map((number) => number + 1)
    .filter((e) => e > 40);
  console.log(returnValue);
};
func3();
