"use strict";
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    move() {
        console.log(`Car is moving at speed of ${this.speed} km/h`);
    }
}
class Bicycle {
    constructor(speed) {
        this.speed = speed;
    }
    move() {
        console.log(`Bicycle is moving at speed of ${this.speed} km/h`);
    }
}
const car = new Car(80);
car.move();
const bicycle = new Bicycle(30);
bicycle.move();
