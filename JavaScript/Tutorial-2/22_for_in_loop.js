// on array
const array = function () {
  const arr = ["sonu", 1, 2, true];
  for (const i in arr) {
    // Here i return index not elemnet
    console.log(`Index is: ${i} and element is ${arr[i]}`);
  }
};
// array();

// on object
const object = function () {
  const obj = {
    name: {
      firstname: "Sonu",
      lastName: "Mondal",
    },
    salary: 8000,
    property: ["gold", "silver", "real state"],
  };
  for (const i in obj) {
    // Here i is same like array index but in object it is said to keys
    console.log(`keys:${i} and value: ${obj[i]}`);
  }
};
// object();

//on string
const string = function () {
  const str = "Sonu Mondal";
  for (const i in str) {
    console.log(`Index is: ${i} and element is ${str[i]}`);
  }
};
// string();