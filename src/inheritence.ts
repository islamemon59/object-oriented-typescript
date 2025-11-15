// //parent class

// class Parent {
//   name: string; // common
//   age: number; // common
//   address: string; // common

//   // property
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   //common
//   getSleep(hour: number) {
//     console.log(`${this.name} always sleep ${hour} hour in a day`);
//   }
// }

// class Student extends Parent {
//   roll: number;
//   constructor(name: string, age: number, address: string, roll: number) {
//     super(name, age, address);
//     this.roll = roll;
//   }
// }

// class Teacher extends Parent {
//   designation: string; // own property

//   //property
//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   //own method
//   getClass(hour: number) {
//     console.log(`${this.name} always take class ${hour} hour in a day`);
//   }
// }

// const student1 = new Student("Emon", 23, "Dhaka", 2);
// const teacher1 = new Teacher("Mezba", 28, "Dhaka", "Teacher");
// student1.getSleep(4);
// teacher1.getClass(4);

class Parent {
  name: string;
  age: number; // common
  address: string;
  home: string;

  constructor(name: string, age: number, address: string, home: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.home = home;
  }

  //common
  getEating() {
    console.log(
      `${this.name} want to like eating always.${this.name} age is ${this.age} and live in this sweet home name ${this.home}`
    );
  }
}

class Student extends Parent {
  hour: number
  constructor(name: string, age: number, address: string, home: string, hour: number) {
    super(name, age, address, home);
    this.hour = hour
  }

  getStudy(){
    console.log(`${this.name} is a student and he/she take study total ${this.hour} hour`);
  }
}

const person1 = new Parent("Mr.X", 20, "Jigatola", "Vanilla");
const student1 = new Student("Mr. Y", 18, "Humna", "Town", 6)
 
console.log(person1.getEating());
console.log(student1.getStudy());
