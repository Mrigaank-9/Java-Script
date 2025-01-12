// Array

const myArr = [0, 1, 2, 3, 4, true, 5];

console.table(myArr);

const myHeros = ["Shakiman", "Nagraj"];

console.log(myHeros);

// 0 based indexing

console.log(myHeros[0]);

// Array Methods

myArr.push(6); // add values at end

console.log(myArr);

myArr.pop(); // remove the value at end
console.log(myArr);

myArr.unshift(9); // add at front ;
console.log(myArr);
myArr.shift(9); // remove at front ;
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join(); // array to string

console.log(`The new Array ${newArr} \nThe Old Array`);
console.log(myArr);
console.log(
  `The new Array date type ${typeof newArr} \nThe Old Array date type ${typeof myArr}`
);

// slice - no change on original array , splice - change on original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3);
console.log("B ", myArr);
