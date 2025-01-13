const user = {
  username: "Mrigaank",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
console.log(this);
// global object in browers is window and in node is empty

function chai() {
  let username = "mrigaank";
  console.log(this.username);
  console.log(this);
}
chai();

const chai1 = function () {
  let username = "mrigaank";
  console.log(this.username);
};
chai1();

const chai2 = () => {
  // arrow functions
  let username = "mrigaank";
  console.log(this.username);
};

const addTwo = (num1, num2) => num1 + num2;
