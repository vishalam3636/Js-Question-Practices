// https://edabit.com/challenge/SwyjHvkqwwQ2iJsoS

/*
❓❓❓❓ Check if an Array Contains a Given Number ❓❓❓❓

Write a function to check if an array contains a particular number.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false

📝 Notes:
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
*/

console.log("**** My SOl-01: *****");
// My Sol-01:
function check(arr, el) {
  return arr.includes(el);
}

console.log(check([1, 2, 3, 4, 5], 3)); // true
console.log(check([1, 1, 2, 1, 1], 3)); // false
console.log(check([1, 1, 2, 1, 5, 4, 7], 7)); // true
console.log(check([1, 1, 2, 1, 5, 4, 7], 8)); // false
console.log(check([5, 5, 5, 6], 5)); // true
console.log(check([], 5)); // false

console.log("**** My SOl-02: *****");
// My Sol-02:
function check2(arr, el) {
  let flag = false;

  for (let elem of arr) {
    if (elem === el) {
      flag = true;
      break;
    }
  }

  return flag;
}

console.log(check2([1, 2, 3, 4, 5], 3)); // true
console.log(check2([1, 1, 2, 1, 1], 3)); // false
console.log(check2([1, 1, 2, 1, 5, 4, 7], 7)); // true
console.log(check2([1, 1, 2, 1, 5, 4, 7], 8)); // false
console.log(check2([5, 5, 5, 6], 5)); // true
console.log(check2([], 5)); // false
