
console.log("===== JAVASCRIPT ARRAY METHODS =====");

// 1. forEach() - executes a function for each element
console.log("\n1. FOREACH");

let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});

// 2. map() - creates a new array by transforming elements
console.log("\n2. MAP");

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 3. filter() - selects elements that satisfy a condition
console.log("\n3. FILTER");

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

let greaterThanTwenty = numbers.filter(function(number) {
    return number > 20;
});

console.log("Even numbers:", evenNumbers);
console.log("Greater than 20:", greaterThanTwenty);

// 4. reduce() - combines elements into one result
console.log("\n4. REDUCE");

let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Sum:", sum);

// 5. Using arrow functions
console.log("\n5. ARROW FUNCTIONS");

let squares = numbers.map(number => number * number);

let smallNumbers = numbers.filter(number => number < 40);

let total = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log("Squares:", squares);
console.log("Numbers below 40:", smallNumbers);
console.log("Total:", total);

// 6. Finding the largest number using reduce()
console.log("\n6. LARGEST NUMBER");

let largest = numbers.reduce(function(max, number) {
    return number > max ? number : max;
}, numbers[0]);

console.log("Largest:", largest);

// 7. Working with an array of objects
console.log("\n7. ARRAY OF OBJECTS");

let students = [
    { name: "Amit", marks: 75 },
    { name: "Priya", marks: 92 },
    { name: "Rahul", marks: 65 },
    { name: "Sneha", marks: 88 }
];

// Get student names
let studentNames = students.map(student => student.name);

console.log("Names:", studentNames);

// Find students who scored at least 80
let toppers = students.filter(student => student.marks >= 80);

console.log("Students scoring at least 80:", toppers);

// Calculate the total marks
let totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log("Total marks:", totalMarks);

// 8. Chaining array methods
console.log("\n8. METHOD CHAINING");

let result = numbers
    .filter(number => number > 20)
    .map(number => number * 2);

console.log("Result:", result);

// filter selects numbers above 20.
// map doubles the selected numbers.

console.log("\nAll array method examples completed!");
