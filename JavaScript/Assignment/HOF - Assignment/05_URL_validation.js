/*5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not. */


let regexArr=[/http/g, /\d/g, /\./g, /\w+/g]
let url="https://sonuportfolio007.netlify.app"
let count=0
for(let i=0; i<regexArr.length; i++){
    let a=regexArr[i].test(url)
    if(a==false){
        count=1
    }
}
if(count==1){
    console.log("false");
}
else{
    console.log("true");
}