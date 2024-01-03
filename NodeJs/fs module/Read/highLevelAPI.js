const fs=require("fs")
console.log("READ START");

// Asynchronous way to read file
// fs.readFile("read.txt",function(err, data){
//     if(err){
//         console.log("Error: ", err.toString())
//     }
//     console.log("Data: ", data.toString())
// })
// console.log("OTHER STUFF")

// Synchronous way to read file
const data=fs.readFileSync("read.txt")
console.log(data.toString())
console.log("OTHER STUFF")