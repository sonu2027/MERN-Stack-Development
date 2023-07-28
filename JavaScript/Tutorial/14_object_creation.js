// Object creation, accessing , updating, adding, deletion

// Method 1: Creation of object
let hero1={name:"sonu", class:12, section:"A", rollNo:38};
console.log(hero1);

// Acessing values from hero1 one by one
console.log("Section of hero1 is:",hero1.section);
console.log("Section of hero1 is:",hero1["section"]);

// Updating values
hero1.name="mr. sonu";
console.log("Name of hero1 is:",hero1.name);
hero1["rollNo"]=108;
console.log("Roll no of hero1 is:",hero1["rollNo"]);

// Adding new keys and values
hero1.salary=100000;
console.log("Salary of hero1 is:",hero1["salary"]);
hero1["companyName"]="Amazon";
console.log("Company name of hero1 is:",hero1.companyName);

// Deleting keys and values 
delete hero1.section;
console.log("Information of hero1 after deleting section:",hero1);
delete hero1["salary"];
console.log("Information of hero1 after deleting salary:",hero1);
// ______________________________________________________________________________________________



// Method 2: Creation of object
let hero2=new Object(); //It's an empty object -> object is a keyword
hero2.name="satyam";
hero2.class=11;
hero2.sec="B";
hero2.rollNo=42;
console.log(hero2);

// Acessing values from hero2 one by one
console.log("Name of hero2 is:",hero2.name);
console.log("Name of hero1 is:",hero2["name"]);

// Note:Acessing, Updating, Adding, Deletion is same like above hero1
// ______________________________________________________________________________________________



// Method 3: Creation of object
let hero3=new Object({name:"golu", class:12, sec:"A", rollNo:23}); 
console.log(hero3);

// Acessing values from hero3 one by one
console.log("Roll no of hero3 is:",hero3.rollNo);
console.log("Roll no of hero3 is:",hero3["rollNo"]);

// Note:Acessing, Updating, Adding, Deletion is same like above hero1
// ______________________________________________________________________________________________



// Method 4: Creation of object through function
function func(name, clas, section, rollNo){
    this.name=name;
    this.class=clas;
    this.section=section;
    this.rollNo=rollNo;
}

let hero4=new func("anupam", 11, "B", 56);
console.log(hero4);

// Acessing values from hero3 one by one
console.log("Nmae of hero4 is:",hero4.name);
console.log("Name of hero4 is:",hero4["name"]);

// Acessing, Updating, Adding, Deletion is same like above hero1