interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

type ReadonlyEmployee = Readonly<Employee>;
type PartialEmployee = Partial<Employee>;

function updateEmployeeInfo(emp: PartialEmployee): void {
    console.log("Employee info updated:", emp);
}
const emp: PartialEmployee = { id: 1, name: "Sruthi" };
updateEmployeeInfo(emp);