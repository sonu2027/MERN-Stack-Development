// string to number
console.log("Number to string:");
let a = "true";
console.log(typeof a);
console.log(a);
a = Number(a); // This line is important
console.log(typeof a);
console.log(a);

/*
nan -> not a number
33 => 33
null => 0
undefined => nan
"33ad" => nan
"true" => nan
"false" => nan
true => 1
false => 1
*/

// number to string
console.log("String to Number:");
a = 33;
console.log(typeof a);
console.log(a);
a = String(a); // This line is important
console.log(typeof a);
console.log(a);

/*
33 => "33"
null => "null"
undefined => "undefined"
true => true
false => false
 */

//  to convert in boolean use Boolean like Number and String
