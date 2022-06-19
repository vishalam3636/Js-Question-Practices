//  https://edabit.com/challenge/FvXHdrhjLaof47Qt3

/*
❓❓❓❓ Less Than, Greater Than ❓❓❓❓ 

Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

arrBetween(7, 32, [1, 2, 3, 78]) ➞ []
*/

console.log("***** My Sol-01: ******");
// My Sol-01:
function arrBetween(num1, num2, arr) {
  return arr.filter((val) => val > num1 && val < num2);
}

console.log(arrBetween(7, 32, [1, 2, 3, 78])); // []
console.log(arrBetween(0, 9, [1, 2, 3, 78])); // [1, 2, 3]
console.log(arrBetween(-5, 3, [-8, 0, 0, 20, -3])); //  [0, 0, -3]
console.log(arrBetween(1, 1, [1, 0, 3, 7])); // []
console.log(arrBetween(0, 310, [1, -2, 300, 78765, 100, 99, 98, 234])); // [1, 300, 100, 99, 98, 234]

console.log("***** My Sol-02: ******");
// My Sol-02:
function arrBetween2(num1, num2, arr) {
  let newArr = [];

  for (let elem of arr) {
    if (elem > num1 && elem < num2) {
      newArr.push(elem);
    }
  }

  return newArr;
}

console.log(arrBetween2(7, 32, [1, 2, 3, 78])); // []
console.log(arrBetween2(0, 9, [1, 2, 3, 78])); // [1, 2, 3]
console.log(arrBetween2(-5, 3, [-8, 0, 0, 20, -3])); //  [0, 0, -3]
console.log(arrBetween2(1, 1, [1, 0, 3, 7])); // []
console.log(arrBetween2(0, 310, [1, -2, 300, 78765, 100, 99, 98, 234])); // [1, 300, 100, 99, 98, 234]
