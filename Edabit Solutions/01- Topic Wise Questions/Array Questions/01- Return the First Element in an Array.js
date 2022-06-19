// https://edabit.com/challenge/QaApgtePE6QrCZ64o

/*
❓❓❓❓ Return the First Element in an Array ❓❓❓❓

Create a function that takes an array containing only numbers and return the first element.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500

📝 Notes:
The first element in an array always has an index of 0.
*/

//  My Sol-01:
function getFirstValue(arr) {
  return arr[0];
}

console.log(getFirstValue([1, 2, 3])); // 1
console.log(getFirstValue([80, 5, 100])); // 80
console.log(getFirstValue([-500, 0, 50])); // -500
console.log(getFirstValue([5, 2, 3])); // 5
console.log(getFirstValue([75675, 5, 100])); // 75675
console.log(getFirstValue([-52320, 0, 50])); // -52320

// Others interesting solution
function getFirstValueOther(arr) {
  return arr.shift();
}

console.log(getFirstValueOther([1, 2, 3])); // 1
console.log(getFirstValueOther([80, 5, 100])); // 80
console.log(getFirstValueOther([-500, 0, 50])); // -500
console.log(getFirstValueOther([5, 2, 3])); // 5
console.log(getFirstValueOther([75675, 5, 100])); // 75675
console.log(getFirstValueOther([-52320, 0, 50])); // -52320
