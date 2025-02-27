"use strict";
class Bird {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
class Eagle extends Bird {
    fly() {
        console.log(`${this.name} is flying`);
    }
}
class Sparrow extends Bird {
    fly() {
        console.log(`${this.name} is flying`);
    }
}
const eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();
const sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();
