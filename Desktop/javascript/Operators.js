
console.log("----- OPERATORS -----");

// 1. Arithmetic operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

// 2. Assignment operators
let x = 10;
x += 5;
console.log("After +=:", x);

x -= 3;
console.log("After -=:", x);

// 3. Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");

// 4. Logical operators
let age = 21;

console.log(age >= 18 && age <= 60);
console.log(age < 18 || age > 60);
console.log(!(age >= 18));
