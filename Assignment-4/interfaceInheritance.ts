interface Person{
    name:string;
    speak():void;
}
interface Employee extends Person{
    salary:number;
    work():void;
}
class Developer implements Employee{
    name:string;
    salary:number;
    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

    speak() : void{
        console.log(`${this.name} can speak really good`);
    }

    work():void{
        console.log(`${this.name} is working really well and she gets ${this.salary} as salary`);
    }

}

const developer=new Developer("Sruthi",50000);
developer.speak();
developer.work();
