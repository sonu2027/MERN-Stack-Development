/* 
Spread operator: ...
spread is also said to be rest, it depend that where we are using in what sitution
 */

const firstArray=[1,2,3,4]
const secondArray=[4,5,6,7]

//This will give the output we want but we want with the help of spread or rest operator
// const thirdArray=firstArray.concat(secondArray)
// console.log(thirdArray);

// Getting exact value like concat method using spread or rest operator
const thirdArray=[...firstArray, ...secondArray]
console.log(thirdArray);

// arguments: arguments in js is a reserver keyword which has all the details about function. It return Arguments (an object as a output)
function get(){
    console.log("Arguments concept", arguments);
}
get(1,2,3,4)

//Use Array.from(variable) to make variable array

//Rest operator-- ...
function restoperator(...args){
    let fArr=args.map(e=>e)
    console.log(fArr);
}
restoperator(2,3,1)

// spread operator example
const sitename="sonu"
const ans=[...sitename]
console.log(ans);