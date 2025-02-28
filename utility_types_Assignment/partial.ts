interface User {
    id: number;
    name: string;
    email: string;
  }
  function updateUser(user: Partial<User>) {
    const existingUser: User = { id: 101, name: "sruthi", email: "sruthi@gmail.com" };
    const updatedUser = { ...existingUser, ...user };
    console.log(updatedUser);
}
updateUser({});//just call the function
updateUser({ name: "Diya" });//name updated to Diya
updateUser({ email: "Diya@gmail.com" });//email update
updateUser({ id: 102, name: "Riya" });//both id and name update