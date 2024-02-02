let str1="Sonu Mondal"

//Method 1: length
console.log(str1.length) // length is a property and it will return the length of string

//Method 2: toUpperCase(arg)
console.log(str1.toUpperCase()) // toUpperCase() is a function and it will covert lower case to upper-case

//Method 3: toLowerCase(arg)
console.log(str1.toLowerCase()) //it will covert upper-case to lower case

//Method 4: slice(arg1, arg2)
console.log(str1.slice(2,7)) // It will slice the string from index to 2 to 6
console.log(str1.slice(2)) // It will slice the string from index 2

//Method 5: replace(arg1, arg2)
str1="sonu mondal sonu"
console.log(str1.replace("sonu", "anupam")); // It will replace sonu with anupam

// Method 6: concat(arg)
let str2="Satyam"
str1="sonu"
console.log(str1.concat(" is a friend of ", str2)); // It will concatanate

// Method 7: trim()
str1="    sonu     Mondal         "
console.log(str1.trim()); // It will remove space from right and left side of string

// Note: We cannot cannot change the value of string