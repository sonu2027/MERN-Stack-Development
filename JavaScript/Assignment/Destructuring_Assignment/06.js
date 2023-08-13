/*6. Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below. */

const person={
    name: "Sonu Mondal",
    age: 21,
    address:{
        street: "388/2, upen Banerjee Road, Parnasree Pally",
        city: "Kolkata",
        state: "west Bengal"
    }
}
function returnNameStreet(){
    let updatedPerson={
        name: person.name,
        streetAddress: person.address.street
    }
    return updatedPerson
}
let finalPerson=returnNameStreet(person)
console.log(finalPerson);