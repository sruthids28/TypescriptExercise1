interface Vehicle {
    speed: number;
    move(): void;
}
class Car implements Vehicle {
    speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`Car is moving at speed of ${this.speed} km/h`);
    }
}

class Bicycle implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`Bicycle is moving at speed of ${this.speed} km/h`);
    }
}

const car = new Car(80);
car.move();

const bicycle = new Bicycle(30);
bicycle.move();