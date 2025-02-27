abstract class BankAccount{
    protected accountNumber:string;
    protected balance:number;
    constructor(accountNumber:string,balance:number){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amount:number):void{
        this.balance +=amount;
    }
    abstract withdraw(amount:number):boolean;
    getBalance(): number{
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private withdrawalLimit: number;

    constructor(accountNumber: string, balance: number, withdrawalLimit: number) {
        super(accountNumber, balance);
        this.withdrawalLimit = withdrawalLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class CheckingAccount extends BankAccount {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

const savings = new SavingsAccount("BA12345", 20000, 15000);
savings.deposit(200);
console.log(`Savings Balance: ${savings.getBalance()}`);
console.log(`Withdraw 3000: ${savings.withdraw(300)}`);
console.log(`Withdraw 7000: ${savings.withdraw(700)}`);

const checking = new CheckingAccount("BA12895", 20000, 12000);
checking.deposit(300);
console.log(`Checking Balance: ${checking.getBalance()}`);
console.log(`Withdraw 11000: ${checking.withdraw(1100)}`);
console.log(`Withdraw 13000: ${checking.withdraw(1300)}`);
