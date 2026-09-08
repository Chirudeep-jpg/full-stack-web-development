// single inheritence
// Parent Class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    return `${this.brand} is starting.`;
  }
}

// Child Class inherits from Vehicle
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Call the parent constructor
    this.model = model;
  }
  playMusic() {
    return `${this.brand} ${this.model} is playing music.`;
  }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.start());     // "Tesla is starting." (Inherited)
console.log(myCar.playMusic()); // "Tesla Model 3 is playing music."
// Multilevel inheritance
// Grandparent Class
class Animal {
  eat() { return "Eating..."; }
}

// Parent Class
class Mammal extends Animal {
  breathe() { return "Breathing..."; }
}

// Child Class
class Dog extends Mammal {
  bark() { return "Woof!"; }
}

const myDog = new Dog();
console.log(myDog.eat());     // "Eating..." (Inherited from Animal)
console.log(myDog.breathe()); // "Breathing..." (Inherited from Mammal)
console.log(myDog.bark());    // "Woof!"
// Hierarchial inheritence
class User {
  constructor(username) {
    this.username = username;
  }
}

// First Child Class
class Admin extends User {
  deleteUser() { return `Admin ${this.username} deleted a user.`; }
}

// Second Child Class
class Guest extends User {
  viewContent() { return `Guest ${this.username} is viewing content.`; }
}

const admin = new Admin("Alice");
const guest = new Guest("Bob");

console.log(admin.deleteUser());  // "Admin Alice deleted a user."
console.log(guest.viewContent()); // "Guest Bob is viewing content."
// Multiple Inheritence
// Source behaviors
const CanFly = {
  fly() { return "Flying high!"; }
};

const CanSwim = {
  swim() { return "Swimming deep!"; }
};

// Target Class
class AmphibianVehicle {
  constructor(name) {
    this.name = name;
  }
}

// Copy the properties/methods into the class prototype
Object.assign(AmphibianVehicle.prototype, CanFly, CanSwim);

const advancedDrone = new AmphibianVehicle("SkyWater Drone");
console.log(advancedDrone.fly());  // "Flying high!"
console.log(advancedDrone.swim()); // "Swimming deep!"


