"use strict";
async function findProductById(id) {
    const product = {
        _id: id,
        name: "Sample Product",
        price: 100,
        stock: 50,
        category: "Electronics items"
    };
    return product;
}
(async () => {
    const product = await findProductById("12345");
    if (product) {
        console.log("Product found:", product);
    }
    else {
        console.log("Product not found");
    }
})();
