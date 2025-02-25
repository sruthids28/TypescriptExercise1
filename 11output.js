"use strict";
let arr1name = ["A", "B", "C", "D", "E"];
arr1name.fill("X", 1, 4);
console.log(arr1name); //output:[ 'A', 'X', 'X', 'X', 'E' ]  here from index 1 to index 4 it will fill with X
