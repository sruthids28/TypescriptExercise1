interface User {
    id: number;
    name: string;
    role: "Admin" | "Customer";
}

function getUserDetails<T extends User>(user: T): string {
    return `User ${user.name} is a ${user.role}`;
}

const user: User = { id: 1, name: "Sruthi", role: "Admin" };
console.log(getUserDetails(user)); 