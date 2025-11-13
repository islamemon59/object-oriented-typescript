//parent class

class Parent {
  name: string; // common
  age: number; // common
  address: string; // common

  // property
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  //common
  getSleep(hour: number) {
    console.log(`${this.name} always sleep ${hour} hour in a day`);
  }
}

class Student extends Parent {
  roll: number;
  constructor(name: string, age: number, address: string, roll: number) {
    super(name, age, address);
    this.roll = roll;
  }
}

class Teacher extends Parent {
  designation: string; // own property

  //property
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  //own method
  getClass(hour: number) {
    console.log(`${this.name} always take class ${hour} hour in a day`);
  }
}

const student1 = new Student("Emon", 23, "Dhaka", 2);
const teacher1 = new Teacher("Mezba", 28, "Dhaka", "Teacher");
student1.getSleep(4);
teacher1.getClass(4);
