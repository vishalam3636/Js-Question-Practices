// https://edabit.com/challenge/kJQYTCCWSnzhXG9dn

/*
❓❓❓❓ Reverse an Array ❓❓❓❓

Write a function to reverse an array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []

📝Notes:
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

console.log("My SOl-01");
// My SOl-01:
function reverse(arr) {
  return arr.reverse();
}

console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([5, 6, 7])); // [7, 6, 5]
console.log(reverse([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]
console.log(reverse([3, 3])); // [3, 3]
console.log(reverse([-1, -1, -1])); // [-1, -1, -1]
console.log(reverse([])); // []

console.log("My SOl-02");
// My SOl-02:
function reverse2(arr) {
  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
}

console.log(reverse2([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse2([5, 6, 7])); // [7, 6, 5]
console.log(reverse2([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]
console.log(reverse2([3, 3])); // [3, 3]
console.log(reverse2([-1, -1, -1])); // [-1, -1, -1]
console.log(reverse2([])); // []

console.log("My SOl-03");
// My SOl-03:
function reverse3(arr) {
  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr.pop()); // but this will change the entire main arr
  }
  return revArr;

  // console.log("main arr", arr); // totally got emptied
}

console.log(reverse3([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse3([5, 6, 7])); // [7, 6, 5]
console.log(reverse3([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]
console.log(reverse3([3, 3])); // [3, 3]
console.log(reverse3([-1, -1, -1])); // [-1, -1, -1]
console.log(reverse3([])); // []

console.log("Others Sol:");
// Others Sol:
function reverseOther(arr) {
  let revArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    revArr.unshift(arr[i]);
  }
  return revArr;
}

console.log(reverseOther([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseOther([5, 6, 7])); // [7, 6, 5]
console.log(reverseOther([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]
console.log(reverseOther([3, 3])); // [3, 3]
console.log(reverseOther([-1, -1, -1])); // [-1, -1, -1]
console.log(reverseOther([])); // []
