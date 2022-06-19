// https://edabit.com/challenge/95MhNEMuEEFp9PLaN?tab=comments&commentId=RiXyktMhirjSRvCaq

// check for the logic-👉🏽
// https://www.interviewbit.com/blog/smallest-positive-missing-number/

/*
❓❓❓❓ Smallest Missing Positive Integer ❓❓❓❓

Given an array of integers, return the smallest positive integer not present in the array.

Here is a representative example. Consider the array:
[-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2]

After reordering, the array becomes:
[-2, -2, -1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 7, 9, 10]

... from which we see that the smallest missing positive integer is 8.

👨🏽‍💻👨🏽‍💻👨🏽‍💻 EXAMPLES: 👨🏽‍💻👨🏽‍💻👨🏽‍💻
minMissPos([-2, 6, 4, 5, 7, -1, 1, 3, 6, -2, 9, 10, 2, 2]) ➞ 8
After sorting, the array becomes [-2, -2, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 9, 10]
So the smallest missing positive integer is 8

minMissPos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9]) ➞ 2
After sorting, the array becomes [-2, 0, 1, 3, 3, 5, 8, 9, 9, 9]
So the smallest missing positive integer is 2

minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9]) ➞ 1
After sorting, the array becomes [-1, 0, 2, 3, 4, 4, 4, 5, 6, 7, 9, 9, 10, 10]
So the smallest missing positive integer is 1
*/

// MY SOL-01
function minMissPos(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let removeDups = [...new Set(sortedArr)];
  // return removeDups; // [-1, 0, 2, 3,  4, 5, 6, 7, 9, 10]

  let smallest = Math.min(...removeDups);
  let largest = Math.max(...removeDups);
  // console.log(smallest, largest); // [ -1, 10 ]
}

// console.log(minMissPos([-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2])); // 8
// console.log(minMissPos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9])); // 2

// console.log(minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9])); // 1
minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9]); // 1

// console.log(minMissPos([4, 2, 9, 6, 1, 3, -2, 10, 3, 0, 9, 7, 3])); // 5
// console.log(
//   minMissPos([0, -4, -4, -1, -9, -4, -5, -2, -10, -7, -6, -3, -10, -9])
// ); // 1
// console.log(minMissPos([7, 6, 5, 4, 3, 2, 1])); // 8
