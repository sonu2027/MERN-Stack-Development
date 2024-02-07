{
  console.log("Before declaration:");
  console.log("letVariable:", a);
  console.log("varVariable:", b);
  console.log("constVariable:", c);

  let a = "let variable";
  var b = "var variable";
  const c = "const variable";

  console.log("After declaration:");
  console.log("letVariable:", a);
  console.log("varVariable:", b);
  console.log("constVariable:", c);
}

console.log("Outside the block - varVariable:", b);
