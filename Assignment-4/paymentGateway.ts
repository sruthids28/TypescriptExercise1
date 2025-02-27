abstract class PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount}`);
    }

    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount}`);
    }

    abstract validateTransaction(transactionId: string): boolean;
}

interface SecurePayment {
    authenticateUser(userId: string): boolean;
}
class PayPal extends PaymentGateway implements SecurePayment {
    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction ${transactionId}`);
        return transactionId.length > 0;
    }

    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user ${userId}`);
        return userId.length > 0;
    }
}

const paypal = new PayPal();
paypal.processPayment(2000);
paypal.processRefund(600);
console.log(`Transaction valid: ${paypal.validateTransaction("TX101")}`);
console.log(`User authenticated: ${paypal.authenticateUser("User101")}`);