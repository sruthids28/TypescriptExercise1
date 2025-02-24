"use strict";
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let uniqueArray = [...new Set([...arr1, ...arr2])];
console.log(uniqueArray);
