let arr=[1,67,"sonu Mondal"];
console.log(arr);

// Method 1:To pushing element in back of an array
arr.push("my name");
console.log(arr);
arr.push(54,false);
console.log(arr);

// Method 2:To removing element from back of an array
let poppingElement=arr.pop();
console.log("The popping element is:",poppingElement);
console.log(arr);

// Method 3:To removing element from starting of an array
let shiftingElement=arr.shift();
console.log("The shifting element is:",shiftingElement);
console.log(arr);

// Method 4:To add element in starting of an array
arr.unshift(90);
console.log(arr);
arr.unshift("anupam", "sonu");
console.log(arr);

// Note: We can store the popping and shifting element in a variable

// Method 5:Concatanation of array
console.log("Concatanation of array");
let arr1=[1,2,3,4];
let arr2=["sonu", false, 7];
let arr3=arr1.concat(arr2);
console.log(arr3);

// Method 6:Reversing array element
console.log("Reversing array element");
arr3.reverse();
console.log(arr3);

// Method 7:To make array element string
console.log("Making array element string");
let str=arr3.join("");
console.log(str);
str=arr3.join("@");
console.log(str);

// Method 8:To finding index of particular element in an array
console.log("Index of sonu in arr3:",arr3.indexOf("sonu"));
console.log("Index of sonu in arr3:",arr3.indexOf("nothing"));

// Method 9:Accessing array within a range
console.log(arr3.slice(2,6));

// Method 10:Removing and adding array element to middle position
arr3.splice(3,0,998);
console.log(arr3);
arr3.splice(2,1,998);
console.log(arr3);
arr3.splice(4,3,998,1000,17);
console.log(arr3);

// Method 11: toString()
arr3=[1,2,3,4,5,6,7,78,8]
let a=arr3.toString()
console.log(a);

// Method 12: delete
delete arr3[4]
console.log(arr3);

// Method 14: sort()`
let compare =(a, b)=>a-b

arr3.sort(compare)   // Sort the array alphabetically
console.log(arr3) 