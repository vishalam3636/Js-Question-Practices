// https://edabit.com/challenge/9YPqr4rNaYy8Ynrry

/*
❓❓❓❓ Squares and Cubes ❓❓❓❓ 

Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true

📝 Notes:
Remember to return either true or false.
All arrays contain two positive numbers.
If you're stuck, check the Resources for a hint.
*/

// My Sol-01:
function checkSquareAndCube(arr) {
  return Math.sqrt(arr[0]) == Math.cbrt(arr[1]);
}

console.log(checkSquareAndCube([4, 8])); // true
console.log(checkSquareAndCube([5, 12])); // false
console.log(checkSquareAndCube([9, 27])); // true
console.log(checkSquareAndCube([25, 120])); // false
console.log(checkSquareAndCube([25, 125])); // true
console.log(checkSquareAndCube([36, 215])); // false
console.log(checkSquareAndCube([36, 217])); // false
console.log(checkSquareAndCube([144, 1728])); // true
console.log(checkSquareAndCube([1, 1])); // true
console.log(checkSquareAndCube([676, 17576])); // true
