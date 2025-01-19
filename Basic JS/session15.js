// destructing of the object

const course = {
  coursename: "js in hindi",
  prince: "999",
  courseInstructor: "Mrigaank",
};
// course. courseInstructor
const { courseInstructor } = course;
console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);

// // API is in json format

// {
//     "name" : "Mrigaank",
//     "coursename": "js in hindi",
//     "price" : "free"
// };
// it is also the json
// [{}, {}, {}];
