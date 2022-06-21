//  https://edabit.com/challenge/5L368ypvh5ZZ2HJSL

/*
❓❓❓❓ Invert an Array ❓❓❓❓

Create a function that takes an array of numbers arr and returns an inverted array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

invertArray([]) ➞ []
*/

// My Sol-01:
function invertArray(arr) {
  return arr.map((val) => (val !== 0 ? val * -1 : val));
}

console.log(invertArray([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
console.log(invertArray([1, -2, 3, -4, 5])); //  [-1, 2, -3, 4, -5]
console.log(invertArray([])); // []
console.log(invertArray([0])); // [0]
