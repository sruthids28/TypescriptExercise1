abstract class Shape {
    protected color: string;
    constructor(color: string) {
        this.color = color;
    }
    abstract calculateArea(): number;
    getColor():string{
        return this.color;
    }
}
class Circle extends Shape {
    private radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle("blue", 7);
console.log(`Circle Color: ${circle.getColor()}, Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle("pink", 5, 9);
console.log(`Rectangle Color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);