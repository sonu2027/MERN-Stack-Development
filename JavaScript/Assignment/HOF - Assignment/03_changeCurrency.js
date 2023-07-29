/*3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.*/

const itemPriceUs=[2.33, 4, 12.5, 18, 13.80]
const itemPriceIndia=[]
itemPriceUs.map((element, index, arr)=>{
    itemPriceIndia.push(element*80)
})
console.log(itemPriceIndia);