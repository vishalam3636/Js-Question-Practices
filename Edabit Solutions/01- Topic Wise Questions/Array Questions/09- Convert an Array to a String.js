//  https://edabit.com/challenge/BLJ5SyhMoZD892G7w

/*
❓❓❓❓ Convert an Array to a String ❓❓❓❓ 

Create a function that takes an array of numbers or letters and returns a string.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
*/

console.log("***** My Sol-01 ******");
// My Sol-01:
function arrayToString(arr) {
  return arr.join("");
}

console.log(arrayToString([1, 2, 3, 4, 5, 6])); // "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "d"])); // "123asd"
console.log(arrayToString(["a", "s", "d", "f", "e", "r", 1, 2, 3, 4, 5, 0])); // "asdfer123450"
console.log(arrayToString(["A", "D", "F", "G", "H", "Y", "TR", "NNHJK"])); // "ADFGHYTRNNHJK"

console.log("***** My Sol-02 ******");
// My Sol-02:
function arrayToString2(arr) {
  let str = "";

  for (let elem of arr) {
    str += elem;
  }

  return str;
}

console.log(arrayToString2([1, 2, 3, 4, 5, 6])); // "123456"
console.log(arrayToString2(["a", "b", "c", "d", "e", "f"])); // "abcdef"
console.log(arrayToString2([1, 2, 3, "a", "s", "d"])); // "123asd"
console.log(arrayToString2(["a", "s", "d", "f", "e", "r", 1, 2, 3, 4, 5, 0])); // "asdfer123450"
console.log(arrayToString2(["A", "D", "F", "G", "H", "Y", "TR", "NNHJK"])); // "ADFGHYTRNNHJK"
