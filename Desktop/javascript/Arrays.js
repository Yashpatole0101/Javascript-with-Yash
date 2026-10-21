
console.log("===== ARRAYS IN JAVASCRIPT =====");

// 1. Creating an array
console.log("\n1. CREATING AN ARRAY");

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);

// 2. Accessing array elements
console.log("\n2. ACCESSING ELEMENTS");

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[3]);

// Array indexing starts from 0.

// 3. Updating an array element
console.log("\n3. UPDATING AN ELEMENT");

fruits[1] = "Grapes";

console.log(fruits);

// 4. Finding the array length
console.log("\n4. ARRAY LENGTH");

console.log("Number of fruits:", fruits.length);

// 5. Adding elements
console.log("\n5. ADDING ELEMENTS");

fruits.push("Pineapple");
console.log("After push:", fruits);

fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// push() adds an element at the end.
// unshift() adds an element at the beginning.

// 6. Removing elements
console.log("\n6. REMOVING ELEMENTS");

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// pop() removes the last element.
// shift() removes the first element.

// 7. Looping through an array
console.log("\n7. LOOPING THROUGH AN ARRAY");

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 8. Using for...of
console.log("\n8. FOR...OF LOOP");

for (let number of numbers) {
    console.log(number);
}

// 9. Finding the sum of array elements
console.log("\n9. SUM OF ARRAY ELEMENTS");

let sum = 0;

for (let number of numbers) {
    sum = sum + number;
}

console.log("Sum:", sum);

// 10. Finding the largest number
console.log("\n10. LARGEST NUMBER");

let largest = numbers[0];

for (let number of numbers) {
    if (number > largest) {
        largest = number;
    }
}

console.log("Largest number:", largest);

// 11. Checking whether an element exists
console.log("\n11. CHECKING AN ELEMENT");

console.log("Contains 30:", numbers.includes(30));
console.log("Contains 100:", numbers.includes(100));

// includes() returns true or false.

// 12. Finding the index of an element
console.log("\n12. FINDING AN INDEX");

console.log("Index of 40:", numbers.indexOf(40));

// 13. Joining array elements into a string
console.log("\n13. JOINING ELEMENTS");

let colors = ["Red", "Green", "Blue"];

console.log(colors.join(", "));

// 14. Sorting an array
console.log("\n14. SORTING AN ARRAY");

let values = [40, 10, 30, 20, 50];

values.sort((a, b) => a - b);

console.log("Ascending order:", values);

values.sort((a, b) => b - a);

console.log("Descending order:", values);

// 15. Filtering array elements
console.log("\n15. FILTERING ELEMENTS");

let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = allNumbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

// filter() creates a new array containing
// elements that satisfy the condition.

console.log("\nAll array examples completed!");
