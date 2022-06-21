// https://edabit.com/challenge/y6dMjvNaPXXNKeBRQ

/*
❓❓❓❓ Get the Sum of All Array Elements ❓❓❓❓

Create a function that takes an array and returns the sum of all numbers in the array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getSumOfItems([2, 7, 4]) ➞ 13

getSumOfItems([45, 3, 0]) ➞ 48

getSumOfItems([-2, 84, 23]) ➞ 105
*/

// My Sol-01:
function getSumOfItems(arr) {
  return arr.reduce((tot, curr) => tot + curr);
}

console.log(getSumOfItems([2, 7, 4])); // 13
console.log(getSumOfItems([45, 3, 0])); // 48
console.log(getSumOfItems([-2, 84, 23])); // 105
