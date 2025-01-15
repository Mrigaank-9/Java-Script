// iterations

// for loop

for (let index = 0; index < 10; index++) {
  console.log(`${index} Here`);
}

// nested loops
for (let i = 0; i <= 10; i++) {
  console.log("Outer LOOP Value : " + i);
  for (let j = 0; j <= 10; j++) {
    console.log("Inner Loop value : " + j);
  }
}

// on Array
let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 7) break; //
  if (i == 2) continue; //
  console.log(`Value of i is ${i}`);
}

// while loops

// while(condition){

// }

let i = 0;
while (i <= 10) {
  console.log(`Value of index is ${i}`);
  i += 2;
}

// do while
let score = 11;
do {
  console.log(`The Score is ${score}`);
  score++;
} while (score <= 10);
