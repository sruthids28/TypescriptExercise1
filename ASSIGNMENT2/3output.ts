let arrone: (boolean | string | number)[] = [true, false];
let arrtwo: (boolean | string | number)[] = ["Yes", "No"];
let arrthree: (boolean | string | number)[] = arrone.concat(arrtwo, [1, 2, 3]);
console.log(arrthree); // output:it will merge arrone and arrtwo with the numbers 1,2,3 and give as a single array as arrthree