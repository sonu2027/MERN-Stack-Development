//1
const arr=[4,1,9,6,4]
arr.forEach(function(elemen, inde, arr){
    console.log(elemen, inde, arr);
})
arr.forEach((element, index, arr)=>console.log(element, index, arr))

//2 toUpperCase()
const str=["sonu", "mondal", "kumar"]
str.forEach((el)=>console.log(el.toUpperCase()))
str.map(function(element, index, str){
    console.log(element, index, str);
})
str.map((el)=>console.log(el.toUpperCase()))

// 3 filter()
const ftr=["ironman", "hulk", "spiderman"]
const strWithMan = ftr.filter((h) =>{
    return h.endsWith('man')
})
console.log(strWithMan);

//4 reduce()
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0)
console.log(sumOfCartBill);

//check if all values are numbers
const gameScore = [200, 100, 310, 300, 250, 150]
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200 )
console.log(above200);

// Array.from //Used to create an array from any other object
let name="sonu mondal"
let name_arr=Array.from("sonu")
console.log(name_arr);