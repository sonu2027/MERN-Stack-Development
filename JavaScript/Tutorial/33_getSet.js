class product{
    #name
    #price
    #rating

    constructor(n,p,r){
        this.#name=n
        this.#price=p
        this.#rating=r
    }
    set setRatings(r){
        this.#rating=Number(r)+0.5
    }
    get getRatings(){
        console.log(this.#name, this.#price, this.#rating);
    }
    // You can also do the above two function(setRatings and getRatings) with normal function
}
const p=new product("Iphone", 82000, 4.4)
p.setRatings=4.4
p.getRatings
