/*1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output. */
const str="Sonu Mondal"
let length=str.length
let newStr=""
const arr=()=>{
    for(let i=0; i<str.length; i++){
        newStr=newStr+str[length-1]
        length--
    }
    console.log(newStr);
}
setTimeout(arr, 2000);