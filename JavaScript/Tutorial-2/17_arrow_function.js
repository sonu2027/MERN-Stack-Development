// Explicit return
const sum = (x,y) => {
    console.log(`Adding ${x} and ${y}`);
    return x+y;
}
console.log(sum(8,6));

// Implicit return 
// Don't use curly braces {} in implicit return, you can use ()
const sq = (x) => x*x;
console.log(sq(4));

// To return object use ()
const sumAndDiff =(x,y) => ({sum:x+y, diff:x-y});
console.log(sumAndDiff(8,5))