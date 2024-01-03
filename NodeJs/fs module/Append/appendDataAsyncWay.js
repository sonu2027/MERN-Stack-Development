const fs=require("fs")
fs.appendFile("data.txt", " Sonu Mondal", "utf8", function(err){
    if(err){
        console.log("Error: ", err)
    }else{
        console.log("Data append successfully")
    }
})