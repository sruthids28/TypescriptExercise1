interface Products{
    _id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
}

async function findProductById(id: string): Promise<Products | null> {
    const product: Products | null = {
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
    } else {
        console.log("Product not found");
    }
})();