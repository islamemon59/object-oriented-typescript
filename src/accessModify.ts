//access modifier

class BankAccount {

    //access modify
   readonly userId : number;
   readonly userName : string;
   protected userBalance: number;
    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}


class StudentBankAccount extends BankAccount{
addYourBalance(balance: number){
    this.userBalance = this.userBalance = balance;
}
}

const user1 = new BankAccount(12, "Emon", 20);
const user2 = new StudentBankAccount(13, "Hossain", 20)
user2.addYourBalance(200)
user1.addBalance(100)

console.log(user2);