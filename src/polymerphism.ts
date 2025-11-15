// // Polymorphism -> bohurupi

// class Person {
//   getSleep() {
//     console.log(`This is a normal person. He sleep everyday minimum 10 hour`);
//   }
// }

// class Student extends Person {
//   getSleep() {
//     console.log(`This is a student and he sleep every day total 8 hour`);
//   }
// }

// class NextLevelDeveloper extends Person {
//   getSleep() {
//     console.log(`This is next level developer`);
//   }
// }

// const getSleepHour = (param: Person) => {
//   param.getSleep();
// };

// const person1 = new Person();
// const person2 = new Student(); // polymorphism
// const person3 = new NextLevelDeveloper();

// getSleepHour(person3);

// //another example about polymorphism

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape{
//     radius: number;
//     constructor(radius: number){
//         super()
//         this.radius = radius
//     }
//     getArea(): number{
//     return Math.PI* this.radius * this.radius;
//     }
// }

// class Rectangle extends Shape{
//     height: number;
//     width: number;

//     constructor(height: number, width: number){
//         super()
//         this.height = height;
//         this.width = width;
//     }
//     getArea(): number {
//         return this.height * this.width;
//     }
// }

// const getArea = (param: Shape) => {
// console.log(param.getArea());
// }

// const shape1 = new Shape()
// const shape2 = new Circle(10)
// const shape3 = new Rectangle(10, 20)


// getArea(shape3)


class Shape {
  getArea():number{
    return 0;
  }
}

class Circle extends Shape{
  radius: number;

  constructor(radius: number){
    super()
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI*this.radius*this.radius;
  }
}


class Rectangle extends Shape{
  height: number;
  width: number;
  constructor(height: number, width: number){
    super()
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width
  }
}

const getAllArea = (area: Shape) =>{
 console.log(area.getArea());
}

const area1 = new Shape()
const area2 = new Circle(20)
const area3 = new Rectangle(30, 30)

getAllArea(area2)