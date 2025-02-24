let values: number[] = [10, 20, 30, 40, 50];
let result: number | undefined = values.filter(num => num > 25)[0];
let index: number = values.indexOf(40);
console.log("First number > 25:", result);
console.log("Index of 40:", index);
