// if statement
if (true) {
  // if true then executes else not execution
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("User Logged IN");
}

// < , > <= , >= , == , != ,=== (strict equal) , !==

const temperature = 41;
if (temperature === 41) {
  console.log("Eqaul to 50");
} else {
  console.log("Not equal tp 41");
}

// short hand notation
const balance = 1000;
if (balance > 500) console.log("test");

// if, else if , else are the conditiona; statements

// && - and , || - or

//
const month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;

  default:
    break;
}
