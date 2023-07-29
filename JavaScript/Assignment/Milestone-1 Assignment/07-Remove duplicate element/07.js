function arr(cartItems){
    for(let i=0; i<cartItems.length-1; i++){
        for(let j=i+1; j<cartItems.length; j++){
            if(cartItems[i]==cartItems[j]){
                cartItems.splice(j, 1)
            }
        }
    }
    // console.log(cartItems);
}
let cartItems=["blueShirt", "halfPant", "orange", "ghee", "orange", "blueShirt" ];
let a=arr(cartItems);
console.log(cartItems);