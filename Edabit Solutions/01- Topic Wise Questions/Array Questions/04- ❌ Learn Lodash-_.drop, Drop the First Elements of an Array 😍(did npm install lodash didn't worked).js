//  https://edabit.com/challenge/NMdKxEradTmpNnomZ

/*
❓❓❓❓ Learn Lodash: _.drop, Drop the First Elements of an Array ❓❓❓❓ 

According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
drop([1, 2, 3], 1) ➞ [2, 3]

drop([1, 2, 3], 2) ➞ [3]

drop([1, 2, 3], 5) ➞ []

drop([1, 2, 3], 0) ➞ [1, 2, 3]

📝Notes:
Do not attempt to import lodash; you are simply writing your own version.
This entire series of challenges can be found here.
*/

// My Sol-01: (didn't worked)
// import _ from "lodash";

// function drop(arr, val = 1) {
//   return _.drop(arr, [val]);
// }

// console.log(drop([1, 2, 3], 2)); // [3]
// console.log(drop([1, 2, 3], 5)); // []
// console.log(drop([1, 2, 3], 0)); // [1, 2, 3]
// console.log(drop(["banana", "orange", "watermelon", "mango"], 2)); // ["watermelon", "mango"]
// console.log(drop([], 2)); // []

// My Sol-02: (Other way to get the solution, but its not the way as asked to do)
function drop2(arr, val = 1) {
  return arr.slice(val);
}

console.log(drop2([1, 2, 3], 2)); // [3]
console.log(drop2([1, 2, 3], 5)); // []
console.log(drop2([1, 2, 3], 0)); // [1, 2, 3]
console.log(drop2(["banana", "orange", "watermelon", "mango"], 2)); // ["watermelon", "mango"]
console.log(drop2([], 2)); // []
