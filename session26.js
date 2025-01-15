// for of loop -- array specific
const arr = [1, 2, 3, 4];

// for (const i of array){}
for (const num of arr) {
  console.log(num);
}

// in strings
const greetings = "Hello world";
for (const element of greetings) {
  console.log(element);
}

// map : it holds key value pairs and unique pairs only

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":--", value);
}

// const myObject = {
//   game1: "nfs",
//   game2: "spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(key, " ", value);
// }
// this above is not workking as myObjects are not iteratable

const myObject = {
  js: "javaScript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

console.log();
console.log();

// for in loops is used in objects
for (const key in myObject) {
  console.log(key, ":-", myObject[key]);
}

// it also works in array but prints the index only
for (const i in arr) {
  console.log(arr[i]);
}

// for maps is not iteratbles so it can't be used with for in loops

// for (const key in map) {
//   console.log(key);
// }

//``````````````````````````````````

console.log();
console.log();
console.log("````````````````");

// For Each Loops
// callback function tells what fucntion will do
arr.forEach(function (item) {
  console.log(item);
});

console.log();
console.log();

// using arrow functions
arr.forEach((items, index, arr) => {
  console.log(items, index, arr);
});

console.log();
console.log();
function printMe(item) {
  console.log(item);
}
arr.forEach(printMe);

console.log();
console.log();
console.log();

//
const myCoding = [
  {
    lanugageName: "javascript",
    languageFileName: "js",
  },
  {
    lanugageName: "python",
    languageFileName: "py",
  },
  {
    lanugageName: "c++",
    languageFileName: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.lanugageName);
});
