function func1() {
  const username = "Sonu Mondal";
  function child1Func1() {
    const child1Name = "child";
    console.log(username);
  }
  function child2Func1() {
    console.log(username);
    console.log(child1Name); // This will give error
  }
  console.log(child1Name); // this will also give error
  child1Func1();
  child2Func1();
}
// func1()

function func2() {
  const username = "Sonu Mondal";
  function child1Func1() {
    const child1Name = "child";
    console.log(username);
  }
  function child2Func1() {
    console.log(username);
  }
  return child1Func1; // this return the whole scope of child1Func
}

const callFunc2=func2()
console.log(callFunc2); // This is is a function
callFunc2()
