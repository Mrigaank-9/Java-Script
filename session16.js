// functions

function sayMyName() {
  console.log("Mj");
}
sayMyName();

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
function addTwoNumbers2(number1, number2) {
  return number1 + number2;
}
addTwoNumbers(3, 4);

function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage("Mrigaank"));
