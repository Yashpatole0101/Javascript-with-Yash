
console.log("===== THIS, CALLBACKS AND HIGHER-ORDER FUNCTIONS =====");

// 1. The this keyword in an object method
console.log("\n1. THIS IN AN OBJECT");

let person = {
    name: "Yash",
    age: 22,

    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age}.`);
    }
};

person.introduce();

// Here, this refers to the person object.

// 2. The this keyword in an arrow function
console.log("\n2. THIS IN AN ARROW FUNCTION");

let student = {
    name: "Rahul",

    showName: function() {
        console.log("Student name:", this.name);
    }
};

student.showName();

// Arrow functions do not have their own this.
// They use this from their surrounding scope.

// 3. Passing a function as an argument
console.log("\n3. CALLBACK FUNCTION");

function greet(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    let userName = "Yash";
    callback(userName);
}

processUser(greet);

// greet is passed to processUser as a callback.

// 4. Callback with calculation
console.log("\n4. CALLBACK WITH CALCULATION");

function calculate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Multiplication:", calculate(10, 5, multiply));

// 5. Higher-order function
console.log("\n5. HIGHER-ORDER FUNCTION");

function operate(a, b, operation) {
    return operation(a, b);
}

console.log("Subtract:", operate(20, 8, (a, b) => a - b));
console.log("Divide:", operate(20, 5, (a, b) => a / b));

// A higher-order function accepts a function,
// returns a function, or both.

// 6. Function returning another function
console.log("\n6. RETURNING A FUNCTION");

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log("Double:", double(10));
console.log("Triple:", triple(10));

// 7. Synchronous callback
console.log("\n7. SYNCHRONOUS CALLBACK");

function doTask(callback) {
    console.log("Task started");
    callback();
    console.log("Task finished");
}

doTask(function() {
    console.log("Task is running");
});

// 8. Asynchronous callback
console.log("\n8. ASYNCHRONOUS CALLBACK");

setTimeout(function() {
    console.log("This message appears after 1 second");
}, 1000);

console.log("This message appears immediately");

// setTimeout schedules a callback to run later.

// 9. Array method using a callback
console.log("\n9. ARRAY CALLBACK");

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// map calls the callback for each array element.

// 10. Custom higher-order function
console.log("\n10. CUSTOM HIGHER-ORDER FUNCTION");

function performOperation(numbers, callback) {
    return numbers.map(callback);
}

let squares = performOperation(numbers, number => number * number);

console.log("Squares:", squares);

console.log("\nAll examples completed!");
