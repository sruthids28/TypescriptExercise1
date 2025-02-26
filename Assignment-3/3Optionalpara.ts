function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}
console.log(greet("Sruthi")); // Output: Hello, Sruthi!
console.log(greet("Diya", "Good morning")); // Output: Good morning, Diya!