//access modifier/ encapsulation

class BankAccount {

    //access modify with readonly protected public private
   readonly userId : number;
   readonly userName : string;
   protected userBalance: number;
    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // balance update function method
    // also we can private protect method function
   private addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }

    addBalanceInAccount(balance: number){
        this.addBalance(balance)
    }
}

// child bank account extends from parent bank account;
class StudentBankAccount extends BankAccount{
addYourBalance(balance: number){
    this.userBalance = this.userBalance + balance;
}
}

const user1 = new BankAccount(12, "Emon",20);
const user2 = new StudentBankAccount(13, "Hossain", 20)
user2.addYourBalance(400)
user1.addBalanceInAccount(300)
console.log(user1);

console.log(user2);