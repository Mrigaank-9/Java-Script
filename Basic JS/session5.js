console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// problem comes when we compare different types so there is introduction of type script to prevent this issues

console.log("2" > 1); //true
console.log("02" > 1); // true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// strict check- both check type and also the data using extra equal === , !==

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/
