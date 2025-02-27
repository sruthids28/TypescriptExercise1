"use strict";
function getDiscountedPrice(product, discount) {
    return product.price - (product.price * discount / 100);
}
const product = { id: 1, name: "Laptop", price: 5000, isAvailable: true };
console.log(getDiscountedPrice(product, 10));
