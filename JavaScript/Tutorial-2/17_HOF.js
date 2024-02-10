// HOF means a function taking another function as a parameter
// callback: A function func1(func2) taking func2 as a parameter the func2 is said to be call back
//1
let powerTwo=(n)=>{
    return n**2
}
let powercube=(powerTwo, n)=>{
    return powerTwo(n)*n
}
console.log(powercube(powerTwo, 3))

//2
function sayHello(){
    return ()=>{
        console.log("hello sonu");
    }
}
const guessHello=sayHello()
guessHello()

//3
const oneFun=(x)=>{
    const twoFun=(y)=>{
        const threeFun=(z)=>{
            return x+y+z;
        }
        return threeFun;
    }
    return twoFun
}
console.log(oneFun(2)(67)(1));

//4
const myNums=[4,2,7,3,0]
const sumArray=arr=>{
    let total=0;
    arr.forEach(function(element){
        total+=element
    });
    return total
}
console.log(sumArray(myNums));

// 5
const hello=()=>{
    console.log("hello");
}
const sonu=()=>{
    console.log("sonu");
}
setTimeout(sonu, 4000)
setInterval(hello, 1000)