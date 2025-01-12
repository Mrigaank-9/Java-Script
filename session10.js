// We will use the Api for the dates

// Dates- Object

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.getTime());
console.log(myDate.toLocaleDateString());

let myCreateDate = new Date(2023, 0, 23); // month start from 0
let myCreateDate2 = new Date("2024-01-2"); // month start from 1
console.log(myCreateDate);
console.log(myCreateDate2);

console.log(Math.floor(Date.now() / 1000)); // converted to s from ms

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
