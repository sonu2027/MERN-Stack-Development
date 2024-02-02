// Object creation, accessing , updating, adding, deletion

// Method 1: Creation of object
const func1 = function () {
  const hero = { name: "sonu", class: 12, section: "A", rollNo: 38 };
  console.log(hero);
};

// Acessing values from hero1 one by one
const func2 = function () {
  const hero = { name: "sonu", class: 12, section: "A", rollNo: 38 };
  console.log("Section of hero1 is:", hero.section);
  console.log("Section of hero1 is:", hero["section"]);
};

// Updating values
const func3 = function () {
  const hero = { name: "sonu", class: 12, section: "A", rollNo: 38 };
  hero.name = "mr. sonu";
  console.log("Name of hero1 is:", hero.name);
  hero["rollNo"] = 108;
  console.log("Roll no of hero1 is:", hero["rollNo"]);
};

// Adding new keys and values
const func4 = function () {
  const hero = { name: "sonu", class: 12, section: "A", rollNo: 38 };
  hero.salary = 100000;
  console.log("Salary of hero is:", hero["salary"]);
  hero["companyName"] = "Amazon";
  console.log("Company name of hero is:", hero.companyName);
};

// Deleting keys and values
const func5 = function () {
  const hero = { name: "sonu", class: 12, section: "A", rollNo: 38 };
  console.log(hero);
  delete hero.section;
  console.log("Information of hero after deleting section:", hero);
  delete hero["salary"];
  console.log("Information of hero after deleting salary:", hero);
};
// _____________________________________________________________________________________________

// Method 2: Creation of object
const func6 = function () {
  let hero2 = new Object(); //It's an empty object -> object is a keyword
  hero2.name = "satyam";
  hero2.class = 11;
  hero2.sec = "B";
  hero2.rollNo = 42;
  console.log(hero2);
};

// Acessing values from hero one by one
const func7 = function () {
  const hero = { name: "sonu", class: 12, section: "A", rollNo: 38 };
  console.log("Name of hero2 is:", hero.name);
  console.log("Name of hero1 is:", hero["name"]);
};
// _____________________________________________________________________________________________

// Method 3: Creation of object
const func8 = function () {
  const hero = new Object({ name: "golu", class: 12, sec: "A", rollNo: 23 });
  console.log(hero);
  // Acessing values from hero3 one by one
  console.log("Roll no of hero3 is:", hero.rollNo);
  console.log("Roll no of hero3 is:", hero["rollNo"]);
};

// _____________________________________________________________________________________________

// Method 4: Creation of object through function
const func9 = function () {
  function func(name, clas, section, rollNo) {
    this.name = name;
    this.class = clas;
    this.section = section;
    this.rollNo = rollNo;
  }

  let hero = new func("anupam", 11, "B", 56);
  console.log(hero);

  // Acessing values from hero3 one by one
  console.log("Nmae of hero4 is:", hero.name);
  console.log("Name of hero4 is:", hero["name"]);
};