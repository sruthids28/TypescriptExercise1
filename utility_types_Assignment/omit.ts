interface User {
    id: number;
    name: string;
    email: string;
  }
type UserWithoutEmail = Omit<User, "email">;
const userWithoutEmail: UserWithoutEmail = {
    id: 101,
    name: "Sruthi"
};
console.log(userWithoutEmail);