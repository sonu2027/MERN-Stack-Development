const fs=require("fs")
fs.unlink("delete.txt", function(err){
    if(err){
        console.log("Error: ", err)
    }
    else{
        console.log("File delete successfully")
    }
})