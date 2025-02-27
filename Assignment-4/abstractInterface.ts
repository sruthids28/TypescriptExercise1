interface Flyable{
    fly():void;
}
abstract class Bird{
    protected name:String;
    constructor(name:String){
        this.name=name;
    }
    eat(): void {
        console.log(`${this.name} is eating`);
    } 
}
class Eagle extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is flying`);
    }
}

class Sparrow extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is flying`);
    }
}

const eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();

const sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();