//  https://edabit.com/challenge/9ApjPggCLGiPt573m

/*
❓❓❓❓ Find the Index ❓❓❓❓ 

Create a function that takes an array and a string as arguments and returns the index of the string.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

📝 Notes:
Don't forget to return the result.
*/

console.log("***** My Sol-01 ******");
// My Sol-01:
function findIndex(arr, str) {
  return arr.indexOf(str);
}

console.log(findIndex(["abc", "ghj", "banana", "grape"], "grape")); //  3
console.log(findIndex(["a", "b", "c", "d", "e", "f"], "f")); // 5
console.log(
  findIndex(["hi", "edabit.com", "testcase", "validstring"], "edabit.com")
); // 1

console.log("***** My Sol-02 ******");
// My Sol-02:
function findIndex2(arr, str) {
  let ind;

  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] === str ? (ind = i) : "";
  }

  return ind;
}

console.log(findIndex2(["abc", "ghj", "banana", "grape"], "grape")); //  3
console.log(findIndex2(["a", "b", "c", "d", "e", "f"], "f")); // 5
console.log(
  findIndex2(["hi", "edabit.com", "testcase", "validstring"], "edabit.com")
); // 1
