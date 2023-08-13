/*1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's */

let str=["sonu Mondal", "Kumkum kumari", "Anupam Kumari Mishra", "Bipin Mondal", "Satyam Singh", "Rohit Yadav", "Kumkum kumari", "Satyam Singh", "sonu Mondal", "Anupam Kumari Mishra", "Bipin Mondal",]
console.log("Length of string str array is: ",str.length);

//Declaring a Map
let map=new Map()

function count(){
    for(let i=0; i<str.length; i++){
        let count=0
        let strEl=str[i]
        for(let j=0; j<str.length; j++){
            if(strEl==str[j]){
                count++
            }
        }
        map.set(strEl, count)
        let kIsPresent=false
        for(let k=0; k<str.length; k++){
            if(strEl==str[k]){
                kIsPresent=true
                str.splice(k,1)
                k--
            }
        }
        if(kIsPresent==true)
        i--
    }
}
count(str)

//Printing element occurance in Map
console.log("Printing map: ",map);

//printing str array just for checking if there is any element present or not
console.log("str should be an empty array: ",str);
