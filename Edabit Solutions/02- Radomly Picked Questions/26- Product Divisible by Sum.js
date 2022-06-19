//  https://edabit.com/challenge/aJzvBZgp8nzwSk94A

/*
// ❓❓❓❓ Product Divisible by Sum?❓❓❓❓ 

Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
divisible([3, 2, 4, 2]) ➞ false

divisible([4, 2, 6]) ➞ true
// 4 * 2 * 6 / (4 + 2 + 6)

divisible([3, 5, 1]) ➞ false
*/

// My Sol-01:
function divisible(arr) {
  let mult = arr.reduce((tot, curr) => tot * curr, 1);
  let sum = arr.reduce((sum, curr) => sum + curr, 0);

  return mult / sum == parseInt(mult / sum);
}

console.log(divisible([3, 2, 4, 1])); // false
console.log(divisible([4, 4, 4, 4])); // true
console.log(divisible([4, 2, 6])); // true
console.log(divisible([1, 1, 1, 1, 10])); // false
console.log(divisible([10, 5, 10])); // true
console.log(divisible([3, 5, 1])); // false

// Others best sol:
function divisible2(arr) {
  return arr.reduce((a, c) => a * c, 1) % arr.reduce((a, c) => a + c) === 0;
}

console.log(divisible2([3, 2, 4, 1])); // false
console.log(divisible2([4, 4, 4, 4])); // true
console.log(divisible2([4, 2, 6])); // true
console.log(divisible2([1, 1, 1, 1, 10])); // false
console.log(divisible2([10, 5, 10])); // true
console.log(divisible2([3, 5, 1])); // false
