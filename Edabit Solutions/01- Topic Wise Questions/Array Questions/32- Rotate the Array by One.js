// https://edabit.com/challenge/ciuEF8N3NNegxbasd

/*
❓❓❓❓ Rotate the Array by One ❓❓❓❓

Given an array, rotate the values clockwise by one (the last value is sent to the first position).

Check the examples for a better understanding.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

*/

console.log("***** My SOl-01: *****");
// My Sol-01:
function rotateByOne(arr) {
  let newArr = [];

  for (let i = 0; i <= arr.length - 2; i++) {
    newArr.push(arr[i]);
  }

  newArr.unshift(arr[arr.length - 1]);

  return newArr;
}

console.log(rotateByOne([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotateByOne([6, 5, 8, 9, 7])); // [7, 6, 5, 8, 9]
console.log(rotateByOne([20, 15, 26, 8, 4])); // [4, 20, 15, 26, 8]
console.log(rotateByOne([7, 8, 6, 4, 5])); // [5, 7, 8, 6, 4]
console.log(rotateByOne([5, 9, 45, 1, 2])); // [2, 5, 9, 45, 1]
console.log(rotateByOne([5, 9, 45, 1, 2, 8, 10, 12, 15])); // [15, 5, 9, 45, 1, 2, 8, 10, 12]

console.log("***** My Sol-02: *****");
// My Sol-02:
function rotateByOne2(arr) {
  const last = arr.pop();

  arr.unshift(last);

  return arr;
}

console.log(rotateByOne2([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotateByOne2([6, 5, 8, 9, 7])); // [7, 6, 5, 8, 9]
console.log(rotateByOne2([20, 15, 26, 8, 4])); // [4, 20, 15, 26, 8]
console.log(rotateByOne2([7, 8, 6, 4, 5])); // [5, 7, 8, 6, 4]
console.log(rotateByOne2([5, 9, 45, 1, 2])); // [2, 5, 9, 45, 1]
console.log(rotateByOne2([5, 9, 45, 1, 2, 8, 10, 12, 15])); // [15, 5, 9, 45, 1, 2, 8, 10, 12]

console.log("***** Others Solution *****");
// Other Interesting Solution:
let rotateByOneOther = (a) => [a.pop(), ...a];

console.log(rotateByOneOther([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotateByOneOther([6, 5, 8, 9, 7])); // [7, 6, 5, 8, 9]
console.log(rotateByOneOther([20, 15, 26, 8, 4])); // [4, 20, 15, 26, 8]
console.log(rotateByOneOther([7, 8, 6, 4, 5])); // [5, 7, 8, 6, 4]
console.log(rotateByOneOther([5, 9, 45, 1, 2])); // [2, 5, 9, 45, 1]
console.log(rotateByOneOther([5, 9, 45, 1, 2, 8, 10, 12, 15])); // [15, 5, 9, 45, 1, 2, 8, 10, 12]
