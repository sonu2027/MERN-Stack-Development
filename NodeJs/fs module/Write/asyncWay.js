const fs=require("fs")
fs.writeFile("write.txt", "Hello! Sonu Mondal", function(err){
    if(err){
        console.log("Error: ", err);
    }else{
        console.log("Succes in writing");
    }
}) 