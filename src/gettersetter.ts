// //access modifier

// class BankAccount {
//   //access modify with readonly protected public private
//   readonly userId: number;
//   readonly userName: string;
//   protected userBalance: number;
//   constructor(userId: number, userName: string, userBalance: number) {
//     this.userId = userId;
//     this.userName = userName;
//     this.userBalance = userBalance;
//   }

//   // // balance update function method set balance
//   // addBalance(balance: number){
//   //     this.userBalance = this.userBalance + balance
//   // }

//   // //get balance

//   // getBalance(){
//   //     return this.userBalance;
//   // }

//   // we want to set or get balance without call function

//   // set balance with setter
//   set addBalance(amount: number) {
//     this.userBalance = this.userBalance + amount;
//   }

//   // get balance with getter

//   get getBalance() {
//     return this.userBalance;
//   }
// }

// const user1 = new BankAccount(12, "Emon", 20);
// // user1.addBalance(100); // call function to se balance
// // const balance = user1.getBalance(); // call function to get balance
// user1.addBalance = 150;



// console.log(user1.getBalance);


class BankAccount {
  readonly name: string;
  readonly age: number;
  readonly id: number;
  protected balance: number;

  constructor(name: string, age: number, id: number, balance: number){
    this.name = name;
    this.age = age;
    this.id = id;
    this.balance = balance;
  }

  // addBalance(amount: number){
  //   this.balance = this.balance + amount;
  // }

  // add balance with set
  set addBalance(amount: number){
    this.balance = this.balance+ amount
  }

  // getBalance(){
  //   console.log(this.balance);
  // }

  // get balance with get keyword

  get getBalance(){
    return console.log(this.balance);
  }
}

const user1 = new BankAccount("Mr. X", 25, 124, 20)
user1.addBalance = 130;
user1.getBalance
console.log(user1);