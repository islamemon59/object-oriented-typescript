// //access modifier

// class BankAccount {

//     //access modify with readonly protected public private
//    readonly userId : number;
//    readonly userName : string;
//    protected userBalance: number;
//     constructor(userId: number, userName: string, userBalance: number){
//         this.userId = userId;
//         this.userName = userName;
//         this.userBalance = userBalance;
//     }

//     // balance update function method
//     addBalance(balance: number){
//         this.userBalance = this.userBalance + balance
//     }
// }

// // child bank account extends from parent bank account;
// class StudentBankAccount extends BankAccount{
// addYourBalance(balance: number){
//     this.userBalance = this.userBalance = balance;
// }
// }

// const user1 = new BankAccount(12, "Emon", 20);
// const user2 = new StudentBankAccount(13, "Hossain", 20)
// user2.addYourBalance(200)
// user1.addBalance(100)

// console.log(user2);

class BankAccount {
  readonly name: string;
  readonly id: number;
  readonly age: number;
  protected balance: number; // if we use private we can not access outside the class
  // if we use protected we can use that on children

  constructor(name: string, id: number, age: number, balance: number) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.balance = balance;
  }

  addBalance(amount: number) {
    this.balance = this.balance + amount;
  }
}

class StudentBankAccount extends BankAccount {
  addYourBalance(amount: number) {
    this.balance = this.balance + amount;
  }
}

const user1 = new BankAccount("Emon", 222, 26, 100);
const user2 = new StudentBankAccount("Hossain", 333, 20, 150);
user2.addYourBalance(70);
user1.addBalance(100);
console.log(user1);
console.log(user2);
