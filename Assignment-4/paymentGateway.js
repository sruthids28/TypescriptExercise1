"use strict";
class PaymentGateway {
    processPayment(amount) {
        console.log(`Processing payment of ${amount}`);
    }
    processRefund(amount) {
        console.log(`Processing refund of ${amount}`);
    }
}
class PayPal extends PaymentGateway {
    validateTransaction(transactionId) {
        console.log(`Validating transaction ${transactionId}`);
        return transactionId.length > 0;
    }
    authenticateUser(userId) {
        console.log(`Authenticating user ${userId}`);
        return userId.length > 0;
    }
}
const paypal = new PayPal();
paypal.processPayment(2000);
paypal.processRefund(600);
console.log(`Transaction valid: ${paypal.validateTransaction("TX101")}`);
console.log(`User authenticated: ${paypal.authenticateUser("User101")}`);
