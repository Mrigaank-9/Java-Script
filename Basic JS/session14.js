// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggin = false;

console.log(tinderUser);

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Mrigaank",
      lastname: "jaswal",
    },
  },
};
console.log(regularuser.fullname);
console.log(regularuser.fullname?.userfullname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = Object.assign({}, obj1, obj2);

const obj4 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(obj4);

const users = [
  {
    id: 1,
    email: "mrigaank",
  },
  {
    id: 2,
    email: "kh",
  },
  {
    id: 3,
    email: "mh",
  },
];

console.log(Object.keys(tinderUser)); // into array
console.log(Object.values(tinderUser)); // into array

console.log(Object.entries(tinderUser));
// hasOwnProperty - to check the that property exists or not
console.log(users[1].email);

