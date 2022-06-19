// https://edabit.com/challenge/MXChCnzCSBobgY4Ex

/*
❓❓❓❓ Fix the Error: Flattening an Array ❓❓❓❓

👨🏽‍💻👨🏽‍💻 Here is my code:

function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.concat(arr[i]);
  }
  return arr2;
}

But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
flatten([[1, 2], [3, 4]]) ➞ []
Expected: [1, 2, 3, 4]

flatten([["a", "b"], ["c", "d"]]) ➞ []
Expected: ["a", "b", "c", "d"]

flatten([[true, false], [false, false]]) ➞ []
Expected: [true, false, false, false]
*/

// My Sol-01-
function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(...arr[i]);
  }
  return arr2;
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 3, 4]
console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
); //  ['a', 'b', 'c', 'd']
console.log(
  flatten([
    [true, false],
    [false, false],
  ])
); // [true, false, false, false]
