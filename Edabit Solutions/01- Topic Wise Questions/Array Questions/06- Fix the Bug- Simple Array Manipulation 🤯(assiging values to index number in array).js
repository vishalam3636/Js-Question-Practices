//  https://edabit.com/challenge/jipHTDkabftop5irE

/*
❓❓❓❓ Fix the Bug: Simple Array Manipulation ❓❓❓❓ 

Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
*/

// My Sol-01:
function incrementItems(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i] + 1;
  }
  return array;
}

console.log(incrementItems([0, 1, 2, 3])); // [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])); // [0, -1, -2, -3]
