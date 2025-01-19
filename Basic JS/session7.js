// Memory
// 1. Stack (Primitive) - give the copy
// 2. Heap(Non-Primitive) - gives the reference

let prev = "ABC";
let next = prev;

next = "abc";
console.log(prev);
console.log(next);
