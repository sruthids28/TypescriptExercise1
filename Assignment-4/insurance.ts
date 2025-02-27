interface Loan {
    applyForLoan(amount: number): void;
}

interface Insurance {
    applyForInsurance(policy: string): void;
}

class Customer implements Loan, Insurance {
    private loanAmount: number;
    private insurancePolicy: string;
    constructor(loanAmount:number,insurancePolicy:string){
        this.loanAmount=loanAmount;
        this.insurancePolicy=insurancePolicy;
    }

    applyForLoan(amount: number): void {
        //this.loanAmount = amount;
        console.log(`Applied for loan of ${amount}`);
    }

    applyForInsurance(policy: string): void {
        //this.insurancePolicy = policy;
        console.log(`Applied for insurance policy: ${policy}`);
    }
}

const customer = new Customer(80000,"Medical Insurance");
customer.applyForLoan(50000);
customer.applyForInsurance("Health Insurance");