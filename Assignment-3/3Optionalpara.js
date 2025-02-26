"use strict";
function greet(name, message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Sruthi")); // Output: Hello, Sruthi!
console.log(greet("Diya", "Good morning")); // Output: Good morning, Diya!
