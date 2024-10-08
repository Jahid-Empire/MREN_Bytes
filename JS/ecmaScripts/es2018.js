//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================

//? List of new useful features added in ES8  👇
// Rest/Spread Properties
// Promise.prototype.finally()

//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when working with array destructuring:
// const numbers = [1, 2, 3, 4, 5];
// [first, second, ...others] = numbers;

// and spread elements:
const numbers = [1, 2, 3, 4, 5,6,7,8,9,10]
const sum = (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + e+f+g+h+i+j;
const sumOfNumbers = sum(...numbers)

console.log(sumOfNumbers);


//* ES2018 introduces the same but for objects.

//? Object and Rest Operator
// const student = {
//   age: 10,
//   name: "vinod",
//   isStudent: true,
// };

//? Object and Spread operator

//* ============================
//*  Promise.finally()
//* =============================
//? We will cover later in our Promises section part of the video and you gonna love that part.
