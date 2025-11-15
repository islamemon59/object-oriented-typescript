// OOP -> object oriented programming -> class -> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   //it's call property defined
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   //object function method
//   animalMakeSound() {
//     console.log(`${this.name} is making sound like ${this.sound}`);
//   }
// }

//parameter properties
// class Animal {
//   //   public name: string;
//   //   public species: string; no need to decalre type many time
//   //   public sound: string;
//   //it's call property defined
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string
//   ) {
//     // this.name = name;
//     // this.species = species; // also we no need if we use public it will be access in global
//     // this.sound = sound;
//   }

//   //object function method
//   animalMakeSound() {
//     console.log(`${this.name} is making sound like ${this.sound}`);
//   }
// }

// const dog = new Animal("Dog Vai", "Dog", "Gew Gew");
// const cat = new Animal("Cat Bro", "Cat", "mew mew");

// console.log(dog, cat);
// console.log(dog.animalMakeSound()); if we do this it will give ans also undefined cause clg call tow time

// cat.animalMakeSound();

class Parent {
  name: string;
  gender: string;
  property: string;

  constructor(name: string, gender: string, property: string) {
    this.name = name;
    this.gender = gender;
    this.property = property;
  }

  haveProperty(){
    console.log(`${this.name} is a ${this.gender} and he have this ${this.property}`);
  }
}


const parent1 = new Parent("MR. X", "Male", "Home")

console.log(parent1.haveProperty());
