type Product = {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
};

function getDiscountedPrice(product: Product, discount: number): number {
    return product.price - (product.price * discount / 100);
}

const product: Product = { id: 1, name: "Laptop", price: 5000, isAvailable: true };
console.log(getDiscountedPrice(product, 10));