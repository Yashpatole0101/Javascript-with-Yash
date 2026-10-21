
console.log("===== STRINGS IN JAVASCRIPT =====");

// 1. Creating strings
console.log("\n1. CREATING STRINGS");

let firstName = "Yash";
let message = 'Hello JavaScript';

console.log(firstName);
console.log(message);

// 2. Finding string length
console.log("\n2. STRING LENGTH");

let language = "JavaScript";

console.log("Length:", language.length);

// 3. Accessing characters
console.log("\n3. ACCESSING CHARACTERS");

console.log("First character:", language[0]);
console.log("Last character:", language[language.length - 1]);

// 4. Changing letter case
console.log("\n4. CHANGING CASE");

let text = "hello javascript";

console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// 5. Removing extra spaces
console.log("\n5. REMOVING SPACES");

let userInput = "   Hello World   ";

console.log("Original:", userInput);
console.log("Trimmed:", userInput.trim());

// 6. Extracting part of a string
console.log("\n6. EXTRACTING PART OF A STRING");

let course = "JavaScript Programming";

console.log("slice:", course.slice(0, 10));
console.log("substring:", course.substring(0, 10));

// 7. Checking whether text exists
console.log("\n7. CHECKING TEXT");

let sentence = "I am learning JavaScript";

console.log("Includes JavaScript:", sentence.includes("JavaScript"));
console.log("Includes Python:", sentence.includes("Python"));

// 8. Finding a word or character position
console.log("\n8. FINDING POSITION");

console.log("Index of learning:", sentence.indexOf("learning"));

// 9. Replacing text
console.log("\n9. REPLACING TEXT");

let oldMessage = "I like Java";

console.log(oldMessage.replace("Java", "JavaScript"));

// 10. Splitting a string
console.log("\n10. SPLITTING A STRING");

let fruits = "Apple,Banana,Mango";

let fruitArray = fruits.split(",");

console.log(fruitArray);

// 11. Joining strings
console.log("\n11. JOINING STRINGS");

let word1 = "Hello";
let word2 = "World";

console.log(word1.concat(" ", word2));

// 12. Template literals
console.log("\n12. TEMPLATE LITERALS");

let name = "Yash";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);

// 13. Checking the beginning and end
console.log("\n13. STARTS WITH AND ENDS WITH");

let fileName = "program.js";

console.log("Starts with program:", fileName.startsWith("program"));
console.log("Ends with .js:", fileName.endsWith(".js"));

// 14. Repeating a string
console.log("\n14. REPEATING A STRING");

console.log("Hi! ".repeat(3));

// 15. Reversing a string
console.log("\n15. REVERSING A STRING");

let original = "hello";

let reversed = original.split("").reverse().join("");

console.log("Original:", original);
console.log("Reversed:", reversed);

console.log("\nAll string examples completed!");
