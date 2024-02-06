// function multiplyBy5(num){
//     this.num=num
//     return num*5
// }
// multiplyBy5.class="function class"
// console.log(multiplyBy5(6));
// console.log(multiplyBy5.class);

function user(name, salary){
    this.name=name
    this.salary=salary
}

user.prototype.incSalary=function(){
    this.salary++;
}
user.prototype.decSalary=function(){
    this.salary--;
}

const u1=new user("sonu", 1000)
const u2=new user("bipin", 5000)

console.log(u1.name);
console.log(u2.name);
u1.salary+=2
console.log(u2.salary);
u2.incSalary()
console.log(u2.salary);
console.log(u1.salary);