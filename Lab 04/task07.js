// Function definitions for the four core operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

// Object mapping operators to their respective functions (Replacing if-else)
const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
};

// 1. Prompt user for inputs
const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter the operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

// 2. Call the corresponding function based on the operator key
// If the operator doesn't exist in our object, it defaults to an error message
const result = operations[operator] 
               ? operations[operator](num1, num2) 
               : "Invalid Operator";

// 3. Alert the result
alert("Result: " + result);