let num: number[] = [10, 20, 30, 40, 50, 60];
let doubled: number[] = num.map(i => i * 2);
let filtered: number[] = num.filter(i => i <= 50);
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
