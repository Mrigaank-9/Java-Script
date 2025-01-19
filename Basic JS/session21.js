// immediately invoked function expression (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB Connected`);
})(); // in this 2 paranthesis one for defination and other simply . We use so if any pollution happens due to global scope so we use IIFE to prevent it
// chai();

((name) => {
  // not named IIFE
  console.log(`DB Connected 2 ${name}`);
})("Mrigaank");
