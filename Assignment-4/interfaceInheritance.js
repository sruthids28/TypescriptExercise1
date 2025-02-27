"use strict";
class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    speak() {
        console.log(`${this.name} can speak really good`);
    }
    work() {
        console.log(`${this.name} is working really well and she gets ${this.salary} as salary`);
    }
}
const developer = new Developer("Sruthi", 50000);
developer.speak();
developer.work();
