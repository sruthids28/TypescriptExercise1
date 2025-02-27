"use strict";
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}
class SavingsAccount extends BankAccount {
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
}
class CurrentAccount extends BankAccount {
    constructor() {
        super(...arguments);
        this.overdraftLimit = 500;
    }
    withdraw(amount) {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        }
        else {
            console.log("Overdraft limit exceeded.");
        }
    }
}
const savings = new SavingsAccount(12345, 1000);
savings.withdraw(200);
const current = new CurrentAccount(67890, 100);
current.withdraw(600);
