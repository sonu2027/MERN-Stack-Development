import { compose } from "redux"

function removeSpaces(string){
    return string.split(" ").join("")
}

function repeatString(string){
    return string+string
}

function convertToUppercase(string){
    return string.toUpperCase()
}

// We want to execute this above 3 function line by line
// Type-1
console.log(convertToUppercase(repeatString(removeSpaces("my name is sonu"))))
// Type-2 Compose function
const composedFunction=compose(removeSpaces, repeatString, convertToUppercase)
console.log(composedFunction);
console.log(composedFunction("my name is sonu"));