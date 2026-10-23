
import goodbye, {
    greet,
    welcome
} from "./Message.js";

import {
    add,
    subtract,
    multiply,
    PI
} from "./MathUtils.js";

console.log("===== JAVASCRIPT MODULES =====");

console.log("\n1. NAMED IMPORTS");

console.log(greet("Yash"));
console.log(welcome("Yash"));

console.log("\n2. DEFAULT IMPORT");

console.log(goodbye("Yash"));

console.log("\n3. MATH FUNCTIONS");

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));

console.log("\n4. IMPORTED CONSTANT");

console.log("PI:", PI);

console.log("\nAll module examples completed!");
