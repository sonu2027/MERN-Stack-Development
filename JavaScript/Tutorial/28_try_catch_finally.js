//try-cathch syntax
try{
    // Block of code for testing
}
catch(err){
    //catch except an arguments which display err
    // Block of code for addressing error
}
finally{
    // Block of code to run after try-catch
    //finally block always execute
}


// Example
try{
    let x=undefined
    console.log(x[0]);
}
catch(err){
    console.log("error in try: ", err);
}
finally{
    console.log("Finally always get executed");
}
console.log("end");