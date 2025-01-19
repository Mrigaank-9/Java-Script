const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString()); // commas in international
console.log(hundreds.toLocaleString("en-IN")); // commans in indian

// ++++++++++++++++++++++++++++ Maths +++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.33));
console.log(Math.ceil(4.33));
console.log(Math.floor(4.33));

console.log(Math.random()); // 0 to 1
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
