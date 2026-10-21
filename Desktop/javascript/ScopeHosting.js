
console.log("===== SCOPE, HOISTING AND CLOSURES =====");

// 1. Global scope
console.log("\n1. GLOBAL SCOPE");

let globalMessage = "I am a global variable";

function showGlobalMessage() {
    console.log(globalMessage);
}

showGlobalMessage();
console.log(globalMessage);

// 2. Function scope
console.log("\n2. FUNCTION SCOPE");

function testFunctionScope() {
    let localMessage = "I am inside a function";
    console.log(localMessage);
}

testFunctionScope();

// localMessage cannot be accessed outside its function.

// 3. Block scope with let
console.log("\n3. BLOCK SCOPE");

if (true) {
    let blockVariable = "I exist inside this block";
    const blockConstant = "I am also block-scoped";

    console.log(blockVariable);
    console.log(blockConstant);
}

// blockVariable and blockConstant cannot be accessed here.

// 4. var versus let
console.log("\n4. VAR VERSUS LET");

if (true) {
    var varVariable = "var is not block-scoped";
    let letVariable = "let is block-scoped";
}

console.log(varVariable);

// Uncommenting the next line causes a ReferenceError:
// console.log(letVariable);

// 5. Hoisting with var
console.log("\n5. HOISTING WITH VAR");

console.log(varValue); // undefined

var varValue = 100;

console.log(varValue);

// var declarations are hoisted and initialized with undefined.

// 6. Hoisting with let
console.log("\n6. LET HOISTING");

let letValue = 200;

console.log(letValue);

// Accessing a let variable before its declaration
// causes a ReferenceError.

// 7. Function declaration hoisting
console.log("\n7. FUNCTION HOISTING");

sayHello();

function sayHello() {
    console.log("Hello from a function declaration!");
}

// Function declarations can be called before their definition.

// 8. Closure
console.log("\n8. CLOSURE");

function outerFunction() {
    let message = "Hello from the outer function";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

let myClosure = outerFunction();

myClosure();

// The inner function remembers the outer function's scope.

// 9. Counter using closure
console.log("\n9. COUNTER USING CLOSURE");

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The count variable remains available between calls.

// 10. Two independent closures
console.log("\n10. INDEPENDENT CLOSURES");

let counterA = createCounter();
let counterB = createCounter();

console.log("Counter A:", counterA()); // 1
console.log("Counter A:", counterA()); // 2
console.log("Counter B:", counterB()); // 1

console.log("\nAll scope, hoisting and closure examples completed!");
