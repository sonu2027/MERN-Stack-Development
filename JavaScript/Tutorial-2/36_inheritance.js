// Inheritance older_fashion style example
const father={
    color: "shiny",
    hairColor: "Black"
}
const son={
    name:"sonu",
    email: "sonu2027@gmail.com",
    // __proto__: father // This is inhouse declaration of inheritance
}

// This is outhouse declaration of inheritance
son.__proto__=father
console.log("son.harColor:", son.hairColor, "and son.color:", son.color);



// Inheritance new_generation style example
const newFather={
    color: "Grey",
    hairColor: "Brown"
}
const newSon={
    name:"Bipin Mondal",
    email: "bipin2027@gmail.com",
}
// Declaring inheritance
Object.setPrototypeOf(newSon, newFather)
console.log("newSon.hairColor:", newSon.hairColor, "and newSon.color:", newSon.color);


// Example of getting true length of string

String.prototype.trueLength=function(){
    console.log(`The true length of string is: ${this.trim().length}`);
}
"sonu    ".trueLength()
"Bipin  ".trueLength()
