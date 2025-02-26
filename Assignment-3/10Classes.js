"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getCarInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}
let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo());
console.log;
