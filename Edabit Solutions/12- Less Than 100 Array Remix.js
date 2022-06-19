// https://edabit.com/challenge/yks7uNNSRJFWDuj3m

/*
❓❓❓❓ Less Than 100 Array Remix ❓❓❓❓

Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
arrayLessThan100([5, 57]) ➞ true

arrayLessThan100([77, 30]) ➞ false

arrayLessThan100([0]) ➞ true
*/

// My Sol-01:
function arrayLessThan100(arr) {
  return arr.reduce((a, b) => a + b) < 100;
}

console.log(arrayLessThan100([5, 57])); // rue
console.log(arrayLessThan100([77, 30])); // false
console.log(arrayLessThan100([0, 59, 15])); // true
console.log(arrayLessThan100([0])); // true
console.log(arrayLessThan100([35, 59, 15])); // false
console.log(arrayLessThan100([25, 50, 25])); // false
