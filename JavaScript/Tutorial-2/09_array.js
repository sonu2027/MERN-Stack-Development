// Initializing array
const func1 = function () {
  let arr = ["sonu", 1, 89, "o", false];
  console.log(arr);
  console.log(typeof arr);
  console.log(arr.length);
};

// Initializing size of array
const func2 = function () {
  let b = new Array(10);
  console.log(b);
  console.log(b.length);
};

// Creating empty array
const func3 = function () {
  let arr1 = new Array();
  let arr2 = [];
  console.log(arr1, " ", arr1.length);
  console.log(arr2, " ", arr2.length);
};

// Another way of initializing an array
const func4 = function () {
  let arr = new Array("sonu", 23, true, "j");
  console.log(arr);
};

// Accessing data from array
const func5 = function () {
  console.log("Accessing data of array");
  let arr = new Array("sonu", 23, true, "j");
  console.log(arr[3], " ", arr[0]);
};

// updating data of an array
const func6 = function () {
  console.log("Updating data from array");
  let arr = new Array("sonu", 23, true, "j");
  console.log(arr[2]);
  arr[2] = "mandal sonu";
  console.log(arr[2]);
};
