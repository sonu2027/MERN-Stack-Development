let str="Sonu Mondal"
console.log(str.length) // To get the length of string

// Printing string with for loop
for (let index = 0; index < str.length; index++) {
    console.log(str[index]);
}
console.log("\n");

// Printing string with for-of loop
for(let i of str){
    console.log(i);
}

// Template literal
let str1="sonu"
let str2="mondal"
console.log(`${str1} and ${str2}`); // If we try to print our variable in-between the string, js will deny it but instead of using "" or '' we can use ``(back-ticks) to print the value of variable within the back-ticks by using ${string_name}

// Escape sequence character
console.log("sonu\"Mondal") // If you try to print ' or " in a string js will deny it but with the help of \" or \' we can print ' or " in between the string

console.log("sonu\nmondal"); // \n for new line
console.log("sonu\tmondal"); // \t for tab
console.log("sonu\rmondal"); // \r return carriage