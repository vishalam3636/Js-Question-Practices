// https://edabit.com/challenge/PWqkt9HiLcJSr6QEY

/*
❓❓❓❓ Sum of Number Elements in an Array ❓❓❓❓

Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:

numbersSum([1, 2, "13", "4", "645"]) ➞ 3
numbersSum([true, false, "123", "75"]) ➞ 0
numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
*/

// My Sol-01:
function numbersSum(arr) {
  return arr
    .filter((val) => typeof val === "number")
    .reduce((sum, curr) => sum + curr, 0);
}

console.log(numbersSum([1, 2, "13", "4", "645"])); // 3
console.log(numbersSum([true, false, "123", "75"])); // 0
console.log(numbersSum([1, 2, 3, 4, 5, true])); // 15
console.log(numbersSum(["abcd", 1234, false, true, 564, "hii"])); //  1798
console.log(numbersSum(["abcd", "abc45", "assssd", true])); // 0
console.log(numbersSum([])); // 0
console.log(numbersSum(["cghyki", "cd", 12114, 786, true, "me", "bey"])); // 12900
