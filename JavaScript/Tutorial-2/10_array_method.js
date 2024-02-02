// Method 1:To pushing element in back of an array
const showPush = function () {
  let arr = [1, 67, "sonu Mondal"];
  arr.push("my name");
  console.log(arr);
  arr.push(54, false);
  console.log(arr);
};
//showPush()

// Method 2:To removing element from back of an array
const showPop = function () {
  let arr = [1, 67, "sonu Mondal"];
  let poppingElement = arr.pop();
  console.log("The popping element is:", poppingElement);
  console.log(arr);
};
//showPop()

// Method 3:To removing element from starting of an array
const showShift = function () {
  let arr = [1, 67, "sonu Mondal"];
  let shiftingElement = arr.shift();
  console.log("The shifting element is:", shiftingElement);
  console.log(arr);
};
//showShift()

// Method 4:To add element in starting of an array
const showUnshift = function () {
  let arr = [1, 67, "sonu Mondal"];
  arr.unshift(90);
  console.log(arr);
  arr.unshift("anupam", "sonu");
  console.log(arr);
};
// showUnshift();

// Note: We can store the popping and shifting element in a variable

// Method 5:Concatanation of array
const showConcat = function () {
  console.log("Concatanation of array");
  let arr1 = [1, 2, 3, 4];
  let arr2 = ["sonu", false, 7];
  let arr3 = arr1.concat(arr2);
  console.log(arr3);
};
// showConcat()

// Method 6:Reversing array element
const showReverse = function () {
  let arr = [1, 67, "sonu Mondal"];
  console.log("Reversing array element");
  arr.reverse();
  console.log(arr);
};
// showReverse();

// Method 7:To make array element string
const showJoin = function () {
  let arr = [1, 67, "sonu Mondal"];
  console.log("Making array element string");
  let str = arr.join("");
  console.log(str);
  str = arr.join("@");
  console.log(str);
};
// showJoin()

// Method 8: toString()
const makeString = function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 78, 8];
  const str = arr.toString();
  console.log(str, " ", str.length);
};
// makeString()

// Method 9:To finding index of particular element in an array
const showIndexOf = function () {
  let arr = [1, 67, "sonu Mondal"];
  console.log("Index of sonu in arr3:", arr.indexOf("sonu"));
  console.log("Index of sonu in arr3:", arr.indexOf("nothing"));
};
// showIndexOf()

// Method 10:Accessing array within a range
const showSlice = function () {
  let arr = [1, 67, "sonu Mondal", true, null, "87a", 99];
  console.log(arr.slice(2, 6));
};
// showSlice();

// Method 11:Removing and adding array element to middle position
const showSplice = function () {
  let arr = [1, 67, "sonu Mondal"];
  arr.splice(3, 0, 998);
  console.log(arr);
  arr.splice(2, 1, 998);
  console.log(arr);
  arr.splice(4, 3, 998, 1000, 17);
  console.log(arr);
};
// showSplice();

/*
--> Diff b/w slice and splice
    slice: slice print the elemnet of number of given range and don't include last element
    spice: splice remove the element from original array including last element of range
 */

// Method 12: delete
const deleteEl = function () {
  let arr = [1, 67, "sonu Mondal"];
  console.log(arr, " ", arr.length);
  delete arr[1];
  console.log(arr, " ", arr.length);
};
// deleteEl();

// Method 13: sort()`
const showSort = function () {
  let arr=["sonu", 0, true, 89]
  arr.sort(); // Sort the array alphabetically
  console.log(arr);
};
// showSort()