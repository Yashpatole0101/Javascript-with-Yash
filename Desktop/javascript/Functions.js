
console.log("================================");
console.log("    FUNCTIONS IN JAVASCRIPT");
console.log("================================");

// 1. FUNCTION DECLARATION
console.log("\n1. FUNCTION DECLARATION");

function greet() {
    console.log("Hello, JavaScript!");
}

greet();
greet();

// 2. FUNCTION WITH PARAMETERS
console.log("\n2. FUNCTION WITH PARAMETERS");

function add(a, b) {
    console.log("Sum:", a + b);
}

add(10, 20);
add(5, 15);

// 3. FUNCTION WITH RETURN VALUE
console.log("\n3. FUNCTION WITH RETURN VALUE");

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log("Multiplication:", result);

// 4. FUNCTION EXPRESSION
console.log("\n4. FUNCTION EXPRESSION");

const subtract = function(a, b) {
    return a - b;
};

console.log("Subtraction:", subtract(20, 8));

// 5. ARROW FUNCTION
console.log("\n5. ARROW FUNCTION");

const square = (number) => {
    return number * number;
};

console.log("Square:", square(5));

// Short arrow function
const cube = number => number * number * number;

console.log("Cube:", cube(3));

// 6. DEFAULT PARAMETERS
console.log("\n6. DEFAULT PARAMETERS");

function welcome(name = "Guest") {
    console.log("Welcome", name);
}

welcome("Yash");
welcome();

// 7. EVEN OR ODD USING A FUNCTION
console.log("\n7. EVEN OR ODD");

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("10 is", checkEvenOdd(10));
console.log("7 is", checkEvenOdd(7));

// 8. FIND LARGEST OF TWO NUMBERS
console.log("\n8. LARGEST NUMBER");

function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Largest:", findLargest(25, 40));

// 9. FUNCTION TO CALCULATE FACTORIAL
console.log("\n9. FACTORIAL");

function factorial(number) {
    let fact = 1;

    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log("Factorial of 5:", factorial(5));

// 10. CALLBACK FUNCTION
console.log("\n10. CALLBACK FUNCTION");

function processNumber(number, callback) {
    return callback(number);
}

function double(number) {
    return number * 2;
}

console.log("Double:", processNumber(6, double));

console.log("\nAll function examples completed!");
