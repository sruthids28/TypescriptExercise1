"use strict";
function allPositive(numbers) {
    return numbers.every(i => i > 0);
}
console.log(allPositive([28, 21, 26, 24, 11])); //here it will return true since all values are positive
console.log(allPositive([-22, 18, -54])); // here it will return false since it has negative values
