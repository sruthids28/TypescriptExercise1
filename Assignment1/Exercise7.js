"use strict";
let roles = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin = roles.includes("Admin");
let hasSuper = roles.some(i => i.startsWith("Super"));
console.log("Contains Admin:", hasAdmin);
console.log("Has Super role:", hasSuper);
