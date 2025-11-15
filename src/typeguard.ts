// // type guard / type narrowing

// //type guard
// type AquaNumeric = number | string;
// const add = (num1: AquaNumeric, num2: AquaNumeric) => {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     num1.toString() + num2.toString();
//   }
// };

// add(2, 2);
// add(2, "2");
// add("2", 2);

// // in guard

// type NormalUser = {
//   name: string;
// };

// type NormalAdmin = {
//   name: string;
//   role: string;
// };

// const getUserInfo = (user: NormalUser | NormalAdmin) => {
//   if ("role" in user) {
//     console.log(`This ${user.name} is role is ${user.role}`);
//   } else {
//     console.log(`This ${user.name}`);
//   }
// };

// getUserInfo({ name: "Normal User", role: "admin" });




type Numeric = number | string;

const checkNumeric = (num1: Numeric, num2: Numeric) => {
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2
  } else {
    return num1.toString() + num2.toString();
  }
}


console.log(checkNumeric(2, "2"));
console.log(checkNumeric(2, 2));
console.log(checkNumeric("2", 2));