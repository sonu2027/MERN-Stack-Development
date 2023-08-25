function product(n,p,r){
    this.name=n
    this.price=p
    this.rating=r
}
const p=new product("Iphone", 76500, 4.8)
console.log(p);

const x={
    p:product
}
x.p("macbook", 87000, 5)
console.log(x);
/*
1. this keyword in js is different than other language
2. this keyword refer to the context from where we called

--> In the function constructor also
    - If you return primitive it is ignored and we return the object reffered by this
    - If you return a custom object, then the custom object is returned
    - If you don't return anything, then object refferd by this is reurned
 */