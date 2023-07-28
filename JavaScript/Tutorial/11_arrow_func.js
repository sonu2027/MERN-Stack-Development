const sq = (x) => x*x;

const sumOfTwoNo = (x,y) => x+y;

const sum = (x,y) => {
    console.log('Adding ${x} and ${y}');
    return x+y;
}

const sumAndDiff =(x,y) => ({sum:x+y, diff:x-y});

let a=sq(6);
console.log(a);

let b=sumOfTwoNo(6,3);
console.log(b);

let c=sum(1,2);
console.log(c);

let d=sumAndDiff(8,5);
console.log(d);