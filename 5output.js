"use strict";
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits); //output :[ 'apple', 'date', 'elderberry', 'date', 'elderberry' ]
