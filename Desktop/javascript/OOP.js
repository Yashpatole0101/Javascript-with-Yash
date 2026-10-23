
class Student {
    // Constructor initializes object properties
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

// Creating objects
const student1 = new Student("Rahul", 21, "JavaScript");
const student2 = new Student("Priya", 22, "Java");

student1.displayDetails();

console.log("---------------");

student2.displayDetails();
