// https://edabit.com/challenge/9mKB2XJJ9gYgjms4Z

/*
❓❓❓❓ Even or Odd? ❓❓❓❓

Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
evenOrOdd([0]) ➞ "even"

evenOrOdd([1]) ➞ "odd"

evenOrOdd([]) ➞ "even"

evenOrOdd([0, 1, 5]) ➞ "even"
*/

// My Sol-01:
function evenOrOdd(arr) {
  return arr.reduce((tot, curr) => tot + curr, 0) % 2 ? "odd" : "even";
}

// NOTE: In My above solution, arr.reduce((tot, curr) => tot + curr, 0) % 2 is returning true or false . We aren't comparing it with 0 or 1 to check if the num is odd. But we are guessing if the number is "even" or "odd" by Boolean true and Boolean False. so agr false hai to "odd" ho jayega and true hai to "even" ho jayega

console.log(evenOrOdd([0])); // 'even'
console.log(evenOrOdd([1])); // "odd"
console.log(evenOrOdd([])); // 'even'
console.log(evenOrOdd([0, 1, 5])); // 'even'
console.log(evenOrOdd([0, 1, 3])); // 'even'
console.log(evenOrOdd([1023, 1, 2])); // 'even'
console.log(evenOrOdd([0, -1, -5])); // 'even'
console.log(evenOrOdd([0, -1, -3])); // 'even'
console.log(evenOrOdd([-1023, 1, -2])); // 'even'
console.log(evenOrOdd([0, 1, 2])); // "odd"
console.log(evenOrOdd([0, 1, 4])); // "odd"
console.log(evenOrOdd([1023, 1, 3])); // "odd"
console.log(evenOrOdd([0, -1, 2])); // "odd"
console.log(evenOrOdd([0, 1, -4])); // "odd"
console.log(evenOrOdd([-1023, -1, 3])); // "odd"
