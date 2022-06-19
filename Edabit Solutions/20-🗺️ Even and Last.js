// https://edabit.com/challenge/pKSS2rNDiXh4MoNpe

/*
❓❓❓❓ Even and Last ❓❓❓❓ 

Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
evenLast([2, 3, 4, 5]) ➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

evenLast([1, 3, 3, 1, 10]) ➞ 140

evenLast([]) ➞ 0
*/

// My Sol-01:
function evenLast(arr) {
  /*
  // wrong sol, was giving NAN when length of array is zero
  return (
    arr
      .filter((val, ind) => ind % 2 === 0)
      .reduce((sum, curr) => sum + curr, 0) * arr[arr.length - 1]
  );
  */

  // corrected
  return arr.length > 0
    ? arr
        .filter((val, ind) => ind % 2 === 0)
        .reduce((sum, curr) => sum + curr, 0) * arr[arr.length - 1]
    : 0;
}

console.log(evenLast([2, 3, 4, 5])); // 30
console.log(evenLast([])); // 0
console.log(evenLast([2, 2, 2, 2])); // 8
console.log(evenLast([1, 3, 3, 1, 10])); // 140
console.log(evenLast([-11, 3, 3, 1, 10])); // 20
