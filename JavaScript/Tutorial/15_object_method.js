// Object method
let hero1={name:"sonu", class:12, section:"A", rollNo:38};
console.log(hero1);

// 1: Object.keys();
let keys=Object.keys(hero1); //It will assign all keys of hero1 to keys variable in the form of array
console.log("Keys of hero1 is:",keys);

// 2: Object.values();
let values=Object.values(hero1); ////It will assign all values of hero1 to values variable in the form of array
console.log("Values of hero1 is:",values);

//3: Object.entries();
let entries=Object.entries(hero1); ////It will assign all keys and values of hero1 to entries variable in the form of array
console.log("Entries (Keys and values) of hero1 is:",entries);

// 4:Object.freeze(); -> After freezing, we can't update, delete and add any key value
// Object.freeze(hero1);
// hero1.name="Mr. Sonu";
// hero1.salary=100000;
// delete hero1.rollNo;
// console.log("After freeze, hero1 is:",hero1);

// 5: Object.seal(); -> After seal, we can update value but addition and deletion still not work
// Notes: If freeze() is alreay have implemented then seal will not work that's why I have comment out the freeze()
Object.seal(hero1);
hero1.name="Mr. Sonu";
hero1.salary=100000;
delete hero1.rollNo;
console.log("After seal, hero1 is:",hero1);

// 6: Object.assign(); -> It will assign one object in another object
let newObj=Object.assign({}, hero1); //Here, hero1 will copy to newObj
console.log("newOobj is:",newObj);
// Notes: In {} we can add or update key