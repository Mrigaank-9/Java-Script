const coding = ["js", "ruby", "java"];
const value = coding.forEach((item) => {
  console.log(item);
});

// this for each doesn't return any thing

// we use filter to return values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

const newNums = [];
myNums.forEach((element) => {
  if (element > 4) {
    newNums.push(element);
  }
});

console.log(newNums);

const books = [
  {
    title: "abc",
    genre: "history",
  },
  {
    title: "abd",
    genre: "geo",
  },
  {
    title: "lmp",
    genre: "history",
  },
];

const userBooks = books.filter((bk) => {
  return bk.genre == "history";
});

console.log(userBooks);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map function is used to make or change vaues
const newNum = myNumers.map((num) => num + 10);
console.log(newNum);

const newnums = myNumers
  .map((nums) => nums * 2) // excetures first
  .map((nums) => nums * 10) // then this
  .filter((num) => num >= 40); // then this

console.log(newnums);

// reduce function
