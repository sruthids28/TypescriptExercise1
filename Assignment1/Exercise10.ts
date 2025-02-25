interface Employee {
    name: string;
    age: number;
    position: string;
  }
  let employees: Employee[] = [
    { name: "Sruthi", age: 21, position: "Developer" },
    { name: "Diya", age: 32, position: "Manager" },
    { name: "Riya", age: 40, position: "CEO" },
    { name: "Priya", age: 28, position: "Designer" }
  ];
 
  let filteredEmployees = employees.filter(employee => employee.age > 30);
  console.log(filteredEmployees);
  