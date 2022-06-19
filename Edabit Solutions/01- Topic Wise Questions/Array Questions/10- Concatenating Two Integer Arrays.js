// https://edabit.com/challenge/CzPEsTuXfE8J8vknX

/*
❓❓❓❓ Concatenating Two Integer Arrays ❓❓❓❓

Create a function to concatenate two integer arrays.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

📝 Notes:
Don't forget to return the result.
See Resources tab for more info.
*/

console.log("***** My Sol-01: *******");
// My Sol-01:
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(concat([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]
console.log(concat([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]

console.log("***** My Sol-02: *******");
// My Sol-02:
function concat2(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(concat2([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]
console.log(concat2([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]
console.log(concat2([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]

console.log("***** My Sol-03: *******");
// My Sol-03:
function concat3(arr1, arr2) {
  return [...arguments[0], ...arguments[1]];
}

console.log(concat3([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]
console.log(concat3([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]
console.log(concat3([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]
