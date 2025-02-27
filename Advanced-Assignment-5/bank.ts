abstract class BankAccount {
    constructor(public accountNumber: number, public balance: number) {}

    abstract withdraw(amount: number): void;
}

class SavingsAccount extends BankAccount {
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance.");
        }
    }
}

class CurrentAccount extends BankAccount {
    private overdraftLimit = 500;

    withdraw(amount: number): void {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        } else {
            console.log("Overdraft limit exceeded.");
        }
    }
}
const savings = new SavingsAccount(12345, 1000);
savings.withdraw(200); 

const current = new CurrentAccount(67890, 100);
current.withdraw(600); 