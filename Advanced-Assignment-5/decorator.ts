function LogClass(target: Function): void {
    console.log(`Class ${target.name} is instantiated`);
}

@LogClass
class OrderService {
    constructor() {
        console.log("OrderService instance created");
    }
}
const orderService = new OrderService();