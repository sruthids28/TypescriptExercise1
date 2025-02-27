"use strict";
function getUserDetails(user) {
    return `User ${user.name} is a ${user.role}`;
}
const user = { id: 1, name: "Sruthi", role: "Admin" };
console.log(getUserDetails(user));
