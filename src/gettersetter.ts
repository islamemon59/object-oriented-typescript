//access modifier

class BankAccount {
  //access modify with readonly protected public private
  readonly userId: number;
  readonly userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // // balance update function method set balance
  // addBalance(balance: number){
  //     this.userBalance = this.userBalance + balance
  // }

  // //get balance

  // getBalance(){
  //     return this.userBalance;
  // }

  // we want to set or get balance without call function

  // set balance with setter
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  // get balance with getter

  get getBalance() {
    return this.userBalance;
  }
}

const user1 = new BankAccount(12, "Emon", 20);
// user1.addBalance(100); // call function to se balance
// const balance = user1.getBalance(); // call function to get balance
user1.addBalance = 150;



console.log(user1.getBalance);
