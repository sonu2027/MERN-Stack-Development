//In js, function are first class citizen becoz they can be 1. assigned to variable 2. Passed as an argument to other function 3. Returned from function
function greet(){
    console.log("Good morning");
    console.log("Good night");
}

function sqrt(x){ //x -> parameter
    // console.log(x*x);
    return x*x;
}

greet();
let s=sqrt(6); // 6 -> argument
console.log(s);

function sayHello(a="Good morning"){
    return a;
}

// default parameter
let return_value=sayHello("Hello");
console.log(return_value);
return_value=sayHello();
console.log(return_value);

// Passing array to a function
function add([num1, num2, num3]){
    return num1+num2;
}

let num=[7,4];
let result=add(num);
console.log(result);


// arguments (keyword/object)
function sum(x,y,z){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum=sum+arguments[i];
    }
    return sum;
} 
let sumArg=sum(1,2,3,4,5,6,7,8,9,10);
console.log(sumArg);