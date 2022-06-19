// https://edabit.com/challenge/wikfKaQm3zP7buRA4

/*
❓❓❓❓ Special Arrays ❓❓❓❓

An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.
*/

// My Sol-01:
function isSpecialArray(arr) {
  let result = true;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (
      (i % 2 == 00 && arr[i] % 2 === 0) ||
      (i % 2 === 1 && arr[i] % 2 === 1)
    ) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // true
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // false
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // false
console.log(isSpecialArray([1, 1, 1, 2])); // false
console.log(isSpecialArray([2, 2, 2, 2])); // false
console.log(isSpecialArray([2, 1, 2, 1])); // true
console.log(isSpecialArray([4, 5, 6, 7])); // true
console.log(isSpecialArray([4, 5, 6, 7, 0, 5])); // true

// Other's solution
const isSpecialArray2 = (a) => a.every((v, i) => v % 2 == i % 2);
console.log(isSpecialArray2([2, 7, 4, 9, 6, 1, 6, 3])); // true
console.log(isSpecialArray2([2, 7, 9, 1, 6, 1, 6, 3])); // false
console.log(isSpecialArray2([2, 7, 8, 8, 6, 1, 6, 3])); // false
console.log(isSpecialArray2([1, 1, 1, 2])); // false
console.log(isSpecialArray2([2, 2, 2, 2])); // false
console.log(isSpecialArray2([2, 1, 2, 1])); // true
console.log(isSpecialArray2([4, 5, 6, 7])); // true
console.log(isSpecialArray2([4, 5, 6, 7, 0, 5])); // true
