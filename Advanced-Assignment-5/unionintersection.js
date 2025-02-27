"use strict";
function formatInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return `$${input}`;
    }
    else {
        return input.join(", ");
    }
}
console.log(formatInput("hello good morning"));
console.log(formatInput(2624));
console.log(formatInput(["orange", "mango"]));
