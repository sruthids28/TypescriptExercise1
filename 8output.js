"use strict";
let words = ["apple", "banana", "avocado"];
let result = words.every(word => word.startsWith("a"));
console.log(result); //output : fasle because banana does not startswith a
