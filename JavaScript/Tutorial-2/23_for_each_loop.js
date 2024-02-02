/*
-- forEach() is called higher order array loops
-- it except a function and this function is called callback function
-- Callback function doesn't have any name
-- forEach doesn't return anything
*/

const arr = ["sonu", 89, true, "6a"];

// Type -1
const func1 = function () {
  arr.forEach(function sonu(e, i, a) {
    console.log(e, i, a);
  });
};

// Type-2
const func2 = function () {
  arr.forEach(function (e, i, a) {
    console.log(e, i, a);
  });
};

// Type-3
const func3 = function () {
  arr.forEach((e, i, a) => {
    console.log(e, i, a);
  });
};

// Type-4
const func4 = function () {
  function print(e, i, a) {
    console.log(e, i, a);
  }
  arr.forEach(print); // Here, you can also give the reference of a function
};
// func4();

// If there is array of objects
const func5 = function () {
  const user = [
    {
      name: "sonu",
      salary: 200,
    },
    {
      name: "bipin",
      salary: 100,
    },
    {
      name: "kumkum",
      salary: 20,
    },
  ];

  user.forEach((e, i, a) => {
    console.log(e.name);
  });
};
// func5()

// forEach doesn't return anything - we should also check

const func6 = function () {
  const arr = [1, 4, "hi", true];
  const returnvalue = arr.forEach((e) => {
    return e;
  });
  console.log(returnvalue); // Output: undefined -> That's why er should look for another loop (filter())
};
func6();
