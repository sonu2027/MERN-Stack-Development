// on array
const array = function () {
  const arr1 = ["sonu", 1, 2, true];
  for (const e of arr1) {
    console.log(e);
  }
};
// array()

// on object
const object = function () {
  const obj1 = {
    name: {
      firstname: "Sonu",
      lastName: "Mondal",
    },
    salary: 8000,
    property: ["gold", "silver", "real state"],
  };
  for (const e of Object.keys(obj1)) {
    console.log(e, ":", obj1[e]);
  }
};
// object();

//on string
const string = function () {
  const str1 = "Sonu Mondal";
  for (const e of str1) {
    console.log(e);
  }
};

// on Map
const maps = function () {
  const map = new Map();
  map.set("A", "Apple");
  map.set("A", "Apple");
  map.set("B", "Ball");
  map.set("C", "Cat");

  // This loop print the whole map
  for (const i of map) {
    console.log(i);
  }

  // This loop dive the map in key value pair
  for (const [key, value] of map) {
    console.log(key, ":", value);
  }
};
