let myHero=["sonu", "bipin", "kumkum"]
let obj={
    name: "sonu",
    class: 10
}
Object.prototype.heySonu=function(){
    console.log("hey sonu");
}
myHero.heySonu()
obj.heySonu()

console.log("\nstarted array prototype");
Array.prototype.hiSonu=function(){
    console.log("hi sonu");
}
myHero.hiSonu()

// Object will not work with array prototype
console.log(obj.hiSonu());
