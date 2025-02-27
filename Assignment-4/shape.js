"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle("blue", 7);
console.log(`Circle Color: ${circle.getColor()}, Area: ${circle.calculateArea()}`);
const rectangle = new Rectangle("pink", 5, 9);
console.log(`Rectangle Color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);
