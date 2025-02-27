"use strict";
class CreditCard {
    constructor(balance) {
        this.balance = balance;
    }
    pay(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Credit Card`);
        }
        else {
            console.log(`Insufficient balance on Credit Card`);
        }
    }
    refund(amount) {
        this.balance += amount;
        console.log(`Refunded ${amount} to Credit Card`);
    }
}
class DebitCard {
    constructor(balance) {
        this.balance = balance;
    }
    pay(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Debit Card`);
        }
        else {
            console.log(`Insufficient balance on Debit Card`);
        }
    }
    refund(amount) {
        this.balance += amount;
        console.log(`Refunded ${amount} to Debit Card`);
    }
}
class UPI {
    constructor(balance) {
        this.balance = balance;
    }
    pay(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using UPI`);
        }
        else {
            console.log(`Insufficient balance on UPI`);
        }
    }
    refund(amount) {
        this.balance += amount;
        console.log(`Refunded ${amount} to UPI`);
    }
}
const cc = new CreditCard(1400);
cc.pay(500);
cc.refund(80);
const dc = new DebitCard(600);
dc.pay(400);
dc.refund(200);
const upi = new UPI(700);
upi.pay(300);
upi.refund(140);
