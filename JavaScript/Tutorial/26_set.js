let array=[1,2,3,4,4]
let mySet=new Set(array)
// mySet.add(array)
mySet.add(6)
mySet.add([2,3,4,4])
console.log(mySet);
let array2=[2,38,9]
mySet.add([...array2])
console.log(mySet);
console.log(mySet.has([2,3,4,4]));


let newArray=[6,3,8,0,9,5,2]
let newSet=new Set(newArray)
console.log(newSet);

function setDiff(mySet, newSet){
    return [...mySet].filter(el=> newSet.has(el))
}
let diffSet=setDiff(mySet, newSet)
console.log(diffSet);
console.log(typeof(diffSet));