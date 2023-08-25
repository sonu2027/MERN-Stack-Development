const product=function(n, p, r){
    this.name=n 
    this.price=p
    this.rating=r
}
const p= new product("Mi", 15000, 4.4)
console.log(p);