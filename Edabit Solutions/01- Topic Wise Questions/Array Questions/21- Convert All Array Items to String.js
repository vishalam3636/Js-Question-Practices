// https://edabit.com/challenge/TihiK4mBiYsdGuR5H

/*
❓❓❓❓ Convert All Array Items to String ❓❓❓❓ 

Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

parseArray([]) ➞ []

📝 Notes:
Return [] if array is empty.
*/

console.log("**** My Sol-01 ****");
// My SOl-01:
function parseArray(arr) {
  return arr.map((val) => (typeof val === "number" ? "" + val : val));
}

console.log(parseArray([1, 2, "a", "b"])); // ['1', '2', "a", "b"]
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])); // ['1', '2', '3', '17', '24', '3', 'a', '123b']
console.log(parseArray(["abc", 123, "def", 456])); //  ['abc', '123', 'def', '456']
console.log(parseArray([])); // []

console.log("**** My Sol-02 ****");
// My SOl-02:
function parseArray2(arr) {
  let newArr = [];

  for (let elem of arr) {
    if (typeof elem === "number") {
      newArr.push("" + elem);
    } else {
      newArr.push(elem);
    }
  }

  return newArr;
}

console.log(parseArray2([1, 2, "a", "b"])); // ['1', '2', "a", "b"]
console.log(parseArray2([1, 2, 3, 17, 24, 3, "a", "123b"])); // ['1', '2', '3', '17', '24', '3', 'a', '123b']
console.log(parseArray2(["abc", 123, "def", 456])); //  ['abc', '123', 'def', '456']
console.log(parseArray2([])); // []
