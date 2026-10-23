
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}

// Dog inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking");
    }

    displayBreed() {
        console.log("Breed:", this.breed);
    }
}

// Creating a Dog object
const dog1 = new Dog("Tommy", "Labrador");

dog1.eat();
dog1.sleep();
dog1.bark();
dog1.displayBreed();
