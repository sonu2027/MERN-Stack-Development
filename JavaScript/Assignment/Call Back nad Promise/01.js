/* 1. Double using callback.
    Write a function that takes in an array of integers and a callback function, and returns a new array where each
   element is doubled using the callback.
*/
function arr(num){
    const newNum=num.map((e)=>2*e)
    return newNum;
}

function double(num, arr){
    return arr(num)
}

let num=[2,5,7,4]
console.log(num);  // num before double 
num=double(num, arr)
console.log(num); // num after double 
