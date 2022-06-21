// https://edabit.com/challenge/pzmTaGsP6FWRNBF9y

/*
❓❓❓❓ Multiply Every Array Item by Two ❓❓❓❓ 

Create a function that takes an array with numbers and return an array with the elements multiplied by two.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
*/

// My Sol-01:
function getMultipliedArr(arr) {
  return arr.map((val) => val * 2);
}

console.log(getMultipliedArr([2, 5, 3])); // [4, 10, 6]
console.log(getMultipliedArr([1, 86, -5])); // [2, 172, -10]
console.log(getMultipliedArr([5, 382, 0])); // [10, 764, 0]
