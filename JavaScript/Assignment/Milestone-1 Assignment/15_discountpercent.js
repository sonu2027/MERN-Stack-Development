const price=239 //Check by changing the value
const discountPrice=32 //Check by changing the value
let percent=0;
const discountPercent=(price, discountPrice)=>{
    percent=100*(discountPrice/price)
}
discountPercent(price, discountPrice)
console.log("The percentage of discount will be: ", percent.toFixed(2) , "%");