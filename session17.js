function calculateCartPrice(...num1) {
  // it is ... is rest operator it group the parameters
  return num1;
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
  userName: "mrigaank",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.userName} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({
  userName: "sem",
  price: 1200,
});

const myNewArr = [1, 2, 3, 4];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArr));
