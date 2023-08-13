/*2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements. */

let arr=[2,3,1,5,7,2,22,12,4,2,6,7,8,90,2,1,4,2,22,13]
let mySet=new Set()
function returnSet(){
    mySet=new Set(arr)
    return mySet
}
const finalSet=returnSet(arr)
console.log(finalSet);