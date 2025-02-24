"use strict";
let employees = [
    { name: "John Doe", age: 25, position: "Developer" },
    { name: "Jane Doe", age: 32, position: "Manager" },
    { name: "Bob Smith", age: 40, position: "CEO" },
    { name: "Alice Brown", age: 28, position: "Designer" }
];
let filteredEmployees = employees.filter(employee => employee.age > 30);
console.log(filteredEmployees);
