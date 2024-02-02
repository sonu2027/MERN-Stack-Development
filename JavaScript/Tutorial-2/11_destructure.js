// destructure -- spread operator
const spread = function () {
  const arr1 = ["Thor", "iron Man", "Captain America"];
  const arr2 = ["Batman", "Flash", "Superman"];
  const arr3 = [...arr1, ...arr2]; // Destructure
  console.log(arr3);
  console.log(typeof arr3);
};
// spread();

// if hierarchical array present in array
const hierachicalArrayToArray = function () {
  const arr = [
    "sonu mondal",
    1,
    true,
    [5, 88, "90a", ["bny", 0, null]],
    9,
    undefined,
  ];
  console.log(arr);
  const newArray = arr.flat(Infinity);
  console.log(newArray);
};
// hierachicalArrayToArray();

// To check a varuable is array or not
const checkArray = function () {
  const str = "sonu mondal";
  console.log(Array.isArray(str));
  const arr1 = ["s", 9, true];
  console.log(Array.isArray(arr1));
  const arr2 = [
    "sonu mondal",
    1,
    true,
    [5, 88, "90a", ["bny", 0, null]],
    9,
    undefined,
  ];
  console.log(Array.isArray(arr2));
  const func = function () {
    const array = ["h", 9, true];
  };
  console.log(Array.isArray(func));
};
// checkArray();

// make any data type of variable to array
const toArray = function () {
  // string to array
  const str = "sonu mondal";
  const strToArray = Array.from(str);
  console.log(strToArray);

  // array to array
  const arr1 = ["s", 9, true];
  const arr1ToArray = Array.from(arr1);
  console.log(arr1ToArray);

  // array to array
  const arr2 = [
    "sonu mondal",
    1,
    true,
    [5, 88, "90a", ["bny", 0, null]],
    9,
    undefined,
  ];
  const arr2ToArray = Array.from(arr2);
  console.log(arr2ToArray);

  // functio to array
  const func = function () {
    const array = ["h", 9, true];
  };
  const funcToArray = Array.from(func);
  console.log(funcToArray);

  // object to array
  const obj = {
    name: "sonu",
    email: "sonu@gmail.com",
  };
  const objToArray = Array.from(obj);
  console.log(objToArray);
};
// toArray();

// multiple variable to array
const mulVarToArray = function () {
  const v1 = "sonu";
  const v2 = 90;
  const v3 = ["h", "88a", false];
  const v4 = function () {
    console.log("tis is a a function");
  };
  const v5 = {
    name: "h",
    email: "jk",
  };
  const arr=Array.of(v1, v2, v3, v4, v5);
  console.log(arr);
};
// mulVarToArray()
