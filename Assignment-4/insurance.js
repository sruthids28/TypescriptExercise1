"use strict";
class Customer {
    constructor(loanAmount, insurancePolicy) {
        this.loanAmount = loanAmount;
        this.insurancePolicy = insurancePolicy;
    }
    applyForLoan(amount) {
        //this.loanAmount = amount;
        console.log(`Applied for loan of ${amount}`);
    }
    applyForInsurance(policy) {
        //this.insurancePolicy = policy;
        console.log(`Applied for insurance policy: ${policy}`);
    }
}
const customer = new Customer(80000, "Medical Insurance");
customer.applyForLoan(50000);
customer.applyForInsurance("Health Insurance");
