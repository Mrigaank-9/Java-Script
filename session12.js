const marvel_heros = ["thor", " IronMan", "SpiderMan"];
const dc_heros = ["Superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // will make the 3 elements in marvel_heros as array

const all_heros = marvel_heros.concat(dc_heros); // merge the arrays

console.log(all_heros);

// we use the spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // will pass the depth

console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // chck if array
console.log(Array.from("Hitesh")); // make the array

console.log(Array.from({ Name: "Hitesh" })); // interesting

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3)); // make the arrays
