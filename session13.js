//objects

// singleton objects

// object literals

// Object.create()
const mySym = Symbol("key1");
const Jsuser = {
  name: "mrigaank",
  age: 18,
  email: "mrigaank@google.com",
  [mySym]: "myKey", // make the symbol make it look like this
};

console.log(Jsuser.email);

console.log(Jsuser[mySym]);

Jsuser.email = "mrigaank@chatgpt.com";
console.log(Jsuser["email"]);
// Making the object not changeable
// Object.freeze(Jsuser);
// Jsuser.email = "mrigaank@microsoft.com";
console.log(Jsuser["email"]);

Jsuser.greeting = function () {
  console.log("Hello User");
};
Jsuser.greeting = function () {
  console.log(`Hello User ${this.name}`);
};

Jsuser.greeting();
