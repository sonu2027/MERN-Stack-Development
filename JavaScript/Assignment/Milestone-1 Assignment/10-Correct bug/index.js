let cartItems=["apple", "mango", "guava", "apple", "chocolate", "pen"];
let spantag=document.getElementsByClassName("spantag")
for(let i=0; i<cartItems.length; i++){
    let x=document.createElement("span")
    x.innerText=cartItems[i]
    spantag[0].appendChild(x)
}
let lengthOfCartItems=cartItems.length;
for(let i=0; i<lengthOfCartItems; i++){
    cartItems.push(cartItems[i])
}

for(let i=0; i<cartItems.length; i++){
    let y=document.createElement("span")
    y.innerText=cartItems[i]
    spantag[1].appendChild(y);
}