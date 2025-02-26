type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee" ;
};

let employee: Employee = {
    id: 101,
    name: "Sruthi",
    role: "employee"
};

console.log(employee); 