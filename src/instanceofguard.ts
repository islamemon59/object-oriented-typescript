// //parent
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   //common method
//   getSleep(hour: number) {
//     console.log(`${this.name} sleep everyday total ${hour}`);
//   }
// }

// // child extends from parent
// class Student extends Person {
//   constructor(name: string) {
//     super(name);
//   }

//   //own method
//   takeStudy(hour: number) {
//     console.log(`${this.name} take study total ${hour}`);
//   }
// }

// // child extends from parent
// class Teacher extends Person {
//   constructor(name: string) {
//     super(name);
//   }

//   //own method
//   takeClass(hour: number) {
//     console.log(`${this.name} take class total ${hour}`);
//   }
// }

// //instance of student type guard
// const isStudent = (user: Person) => {
//   return user instanceof Student;
// };

// // instance of teacher type guard
// const isTeacher = (user: Person) => {
//   return user instanceof Teacher;
// };

// const getUserInfo = (user: Person) => {
//   if (isStudent(user)) {
//     user.takeStudy(5);
//   } else if (isTeacher(user)) {
//     user.takeClass(5);
//   } else {
//     user.getSleep(15);
//   }
// };

// const student1 = new Student("Mr. Student");
// const teacher1 = new Teacher("Mr. Teacher");

// getUserInfo(teacher1);


class Person {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  getSleep(hour: number){
    console.log(`${this.name} take everyday at least ${hour} hour`);
  }
}

class Student extends Person{
  getStudy(hour: number){
console.log(`${this.name} take study at least ${hour} hour`);
  }
}

class NextLevelDeveloper extends Person{
  getCoding(hour: number){
    console.log(`${this.name} coding every day at least ${hour} hour`);
  }
}

const getUserInfo = (user: Person) => {
  if(user instanceof Student){
    user.getStudy(5)
  } else if(user instanceof NextLevelDeveloper){
    user.getCoding(8)
  } else {
    user.getSleep(6)
  }
}


const user1 = new Person("Mr. X")
const user2 = new Student("Mr. Y")
const user3 = new NextLevelDeveloper("Mr. Z")


getUserInfo(user2)