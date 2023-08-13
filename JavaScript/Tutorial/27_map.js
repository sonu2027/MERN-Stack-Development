let map=new Map() 
console.log("Size of map:", map.size);
let arr=[
    [1, "sonu"],
    [2, "Bipin"],
    [3, "Kumkum"],
    [4, "Rakesh"],
    [5, "Raghav"]
]
console.log("arr: ", arr);
arr.map((arrel)=>map.set(arrel[0], arrel[1]))
