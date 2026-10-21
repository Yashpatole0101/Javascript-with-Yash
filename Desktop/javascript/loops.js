
console.log("================================");
console.log("       LOOPS IN JAVASCRIPT");
console.log("================================");

// 1. FOR LOOP
console.log("\n1. FOR LOOP");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. WHILE LOOP
console.log("\n2. WHILE LOOP");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// 3. DO-WHILE LOOP
console.log("\n3. DO-WHILE LOOP");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// 4. BREAK STATEMENT
console.log("\n4. BREAK STATEMENT");

for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break;
    }
    console.log(k);
}

// 5. CONTINUE STATEMENT
console.log("\n5. CONTINUE STATEMENT");

for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue;
    }
    console.log(k);
}

// 6. PRINT NUMBERS FROM 1 TO 10
console.log("\n6. NUMBERS FROM 1 TO 10");

for (let n = 1; n <= 10; n++) {
    console.log(n);
}

// 7. PRINT EVEN NUMBERS FROM 1 TO 20
console.log("\n7. EVEN NUMBERS FROM 1 TO 20");

for (let n = 1; n <= 20; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}

// 8. SUM OF NUMBERS FROM 1 TO 10
console.log("\n8. SUM OF NUMBERS FROM 1 TO 10");

let sum = 0;

for (let n = 1; n <= 10; n++) {
    sum = sum + n;
}

console.log("Sum:", sum);

console.log("\nAll loop examples completed!");
