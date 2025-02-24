var employees = [
    { name: "Sruthi", age: 21, position: "Developer" },
    { name: "Diya", age: 32, position: "Manager" },
    { name: "Riya", age: 40, position: "CEO" },
    { name: "Priya", age: 28, position: "Designer" }
];
var filteredEmployees = employees.filter(function (employee) { return employee.age > 30; });
console.log(filteredEmployees);
