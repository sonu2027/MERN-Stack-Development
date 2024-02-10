// This is object literal , we'll see later singleton and Object.create

// How to inject symbol in object
const inject = function () {
  const sym = Symbol("x23");
  console.log(typeof sym);
  const obj = {
    name: "sonu mondal",
    salary: 10000,
    id: 1,
    [sym]: sym, // Injecting symbol in object
    greeting: function () {
      console.log(`Hello ${this.name}`);
    },
  };
  console.log(obj);
  console.log(obj[sym]);
  console.log(typeof obj[sym]);
  console.log(obj.greeting);
  obj.greeting();
};
inject()

// many object in one object - Object.assign(obj1, obj2, etc)
const assigned = function () {
  const obj1 = {
    name: "sonu",
    value: true,
  };
  const obj2 = {
    title: "bipin",
    val: 67,
  };
  const obj3 = {
    me: "kumar",
    ve: 89,
  };
  const obj4 = Object.assign(obj1, obj2, obj3);
  console.log(obj4);
};
// assigned()

// spread in object
const spread = function () {
  const obj1 = {
    name: "sonu",
    value: true,
  };
  const obj2 = {
    title: "bipin",
    val: 67,
  };
  const obj3 = {
    me: "kumar",
    ve: 89,
  };
  const obj = { ...obj1, ...obj2, ...obj3 };
  console.log(obj);

  // keys, values and entries
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
};
// spread();

// another way of accessing object
const syntax=function(){
    const user={
        name:"sonu mondal",
        salary:5667
    }

    // example 1
    console.log(user.name, "     ", user.salary);

    // example 2
    console.log(user["name"], "     ", user["salary"]);

    // example 3
    const {name, salary}=user
    console.log(name , "  ", salary);

    // example 4 - for more shortcut
    const {name:n, salary:s}=user
    console.log(n , "  ", s);
}
// syntax()