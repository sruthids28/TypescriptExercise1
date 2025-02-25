let scores: number[] = [55, 23, 87, 12, 99, 38];

let ascending = [...scores].sort((a, b) => a - b);//ascending order
let descending = [...scores].sort((a, b) => b - a);//descending order

console.log("Ascending order:", ascending);
console.log("Descending order:", descending);
