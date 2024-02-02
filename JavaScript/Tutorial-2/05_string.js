// adding two string
const str1 = "sonu ";
const str2 = "Mondal";
const sum = str1 + str2;
console.log(sum);

// string concatenation
const a = "sonu";
const b = " Mondal";
const ab = a.concat(b);
console.log(ab);

// touppercase &tolowecase
console.log(ab.toUpperCase());
console.log(ab.toLowerCase());

const myname = "sonu mondal";
console.log(typeof myname); // Output: string
console.log(sum.indexOf("u"));
const myNewname = new String("Mondal Sonu");
console.log(myNewname.__proto__); // give a empty object, object will show in browser
console.log(typeof myNewname); // output object
console.log(myNewname.length);

// Template literal
let str11 = "sonu";
let str22 = "mondal";
console.log(`${str11} and ${str22}`); // If we try to print our variable in-between the string, js will deny it but instead of using "" or '' we can use ``(back-ticks) to print the value of variable within the back-ticks by using ${string_name}

// Escape sequence character
console.log('sonu"Mondal'); // If you try to print ' or " in a string js will deny it but with the help of \" or \' we can print ' or " in between the string

console.log("sonu\nmondal"); // \n for new line
console.log("sonu\tmondal"); // \t for tab
console.log("sonu\rmondal"); // \r return carriage
