// Data types

//  Primitives
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); // false;

const bigNumber = 123455253253252523532523523532n; // this is a big number

// Reference (Non Primitive)
// Array, Objects, Functions

// It is dynamically typed

const hero = ["Shaktimaan", "naagraj", "doga"]; // array
let myObject = {
  // object
  name: "Mrigaank Jawal",
  age: 22,
};

const myFunction = function () {
  console.log("hello world");
};

// using typeof to get the type of the varibale
