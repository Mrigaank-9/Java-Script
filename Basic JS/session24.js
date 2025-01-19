const userEmail = "mrigaank.ai";

if (userEmail) {
  console.log("Got UserEmail");
} else {
  console.log("Don't have use Email");
}

// false values false, 0 , -0 , BigInt 0n, empty , null , defined , NaN

// ?? -> Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
// it is used as null safety .
val1 = undefined ?? 15;

val1 = null ?? 10 ?? 13 ?? 14;
console.log(val1);

// Ternary operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("Less than 80")
  : console.log("Greater than 80");
