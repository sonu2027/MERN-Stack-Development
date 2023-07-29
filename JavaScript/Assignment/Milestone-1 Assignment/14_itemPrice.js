// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const obj={
    2:4000,
    3:2800,
    5: 800,
    1:36000
};

Object.keys(obj).forEach(key => {
        console.log(key*obj[key]);
});