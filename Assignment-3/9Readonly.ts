interface User {
    id: number;
    name: string;
    email: string;
}

const users: Readonly<User> = {
    id: 1,
    name: "Sruthi",
    email: "sruthi@gmail.com"
};

let newUser: Partial<User> = { name: "Diya" }; 
console.log(users); 
console.log(newUser); 
