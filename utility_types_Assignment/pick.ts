interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
type ProductSummary = Pick<Product, "id" | "name" | "price">;
const productSummary: ProductSummary = {
    id: 101,
    name: "Dell Laptop",
    price: 60000  
};
console.log(productSummary);