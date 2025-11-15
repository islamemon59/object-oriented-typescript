// class Counter {
//   static count: number = 0;
//   /// static premium when we call static we can't use this
//   static increment() {
//     return (Counter.count = Counter.count + 1);
//   }

//   static decrement() {
//     return (Counter.count = Counter.count - 1);
//   }
// }

// const count1 = new Counter();
// const count2 = new Counter();

// // console.log(count1.increment()); // come from different memory
// // console.log(count1.increment());
// // console.log(count2.increment());// come from different memory
// // console.log(count2.increment());

// console.log(Counter.increment());
// console.log(Counter.increment());
// console.log(Counter.increment());  // static call with Object not instance
// console.log(Counter.increment());
// console.log(Counter.increment());  // come from all same memory
// console.log(Counter.increment());
// console.log(Counter.increment());

class Counter {
  static count: number = 0;

 static increment() {
    return (this.count = this.count + 1);
  }

 static decrement() {
    return (this.count = this.count - 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
