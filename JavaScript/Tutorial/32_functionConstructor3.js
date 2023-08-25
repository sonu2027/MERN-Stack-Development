const product=(n, p, r)=>{
    this.name=n 
    this.price=p
    this.rating=r
}
// Arrow function can't be used as function constructor
// The theory of this keyword pointing to calling context is not applicable with arrow function
const p= new product("Mi", 15000, 4.4)
console.log(p);