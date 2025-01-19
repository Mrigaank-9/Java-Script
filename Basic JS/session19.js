// scope level and mini hoisting

function one() {
  const userName = "Mrigaank"; // can be accessed by 2

  function two() {
    const website = "youtube"; // can't be accessed by 1
    console.log(userName);
  }
  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "mrigaank";
  if (username === "mrigaank") {
    const webite = " youtube";
    console.log(username + webite);
  }
}

// +++++++++++++++++++++++++ interesting +++++++++++++
console.log(addone(5));
function addone(value) {
  // this is a function
  return value + 1;
}

const addTwo = function (num) {
  // this is a expression
  return num + 2;
};

console.log(addone(5));
console.log(addTwo(5));
