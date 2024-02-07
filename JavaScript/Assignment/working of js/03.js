function sumNumbers(num1, num2) {
    var result;

    // Log the value before assignment
    console.log("Before assignment:", result); // Output: Before assignment: undefined

    // Assign a value to the variable
    result = num1 + num2;

    // Log the value after assignment
    console.log("After assignment:", result); 

    // Return the result
    return result;
}

// Call the function
var totalSum = sumNumbers(5, 7);
console.log("Total Sum:", totalSum);
