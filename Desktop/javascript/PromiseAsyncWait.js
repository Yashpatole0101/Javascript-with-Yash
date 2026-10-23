

console.log("===== PROMISES AND ASYNC/AWAIT =====");

// 1. Creating a Promise
console.log("\n1. CREATING A PROMISE");

let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Operation completed successfully!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

// resolve() means success.
// reject() means failure.

// 2. Promise with a failure
console.log("\n2. HANDLING A REJECTED PROMISE");

let failedPromise = new Promise(function(resolve, reject) {
    reject("Something went wrong!");
});

failedPromise
    .then(result => console.log(result))
    .catch(error => console.log("Caught:", error));

// 3. Promise with setTimeout
console.log("\n3. PROMISE WITH DELAY");

function getData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data received!");
        }, 1000);
    });
}

getData().then(data => console.log(data));

// 4. Promise chaining
console.log("\n4. PROMISE CHAINING");

Promise.resolve(5)
    .then(number => number * 2)
    .then(number => number + 10)
    .then(result => console.log("Final result:", result));

// Each then() receives the previous step's result.

// 5. async function
console.log("\n5. ASYNC FUNCTION");

async function sayHello() {
    return "Hello from async function!";
}

sayHello().then(message => console.log(message));

// An async function always returns a Promise.

// 6. await keyword
console.log("\n6. USING AWAIT");

function fetchMessage() {
    return new Promise(function(resolve) {
        setTimeout(() => resolve("Message loaded!"), 1000);
    });
}

async function displayMessage() {
    let message = await fetchMessage();
    console.log(message);
}

displayMessage();

// await waits for a Promise to settle inside
// an async function before continuing that function.

// 7. Error handling with try...catch
console.log("\n7. TRY AND CATCH");

function checkAge(age) {
    return new Promise(function(resolve, reject) {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject(new Error("Not eligible"));
        }
    });
}

async function verifyAge() {
    try {
        let result = await checkAge(22);
        console.log("Age check:", result);
    } catch (error) {
        console.log("Age check error:", error.message);
    }
}

verifyAge();

// 8. Simulating an API request
console.log("\n8. SIMULATED API REQUEST");

function getUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                id: 1,
                name: "Yash",
                course: "JavaScript"
            });
        }, 1000);
    });
}

async function displayUser() {
    try {
        let user = await getUser();

        console.log("User ID:", user.id);
        console.log("User name:", user.name);
        console.log("Course:", user.course);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayUser();

// This simulates an API; it does not call a real server.

// 9. Promise.all
console.log("\n9. PROMISE.ALL");

let promise1 = Promise.resolve("First");
let promise2 = Promise.resolve("Second");
let promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then(results => console.log("Results:", results))
    .catch(error => console.log("Error:", error));

// Promise.all succeeds when all supplied Promises fulfill.
// It rejects if any supplied Promise rejects.

// 10. async/await with multiple steps
console.log("\n10. MULTIPLE ASYNC STEPS");

function getNumber() {
    return Promise.resolve(10);
}

async function calculate() {
    let number = await getNumber();
    let result = number * 5;

    console.log("Calculated result:", result);
}

calculate();

console.log("\nAll examples started!");
