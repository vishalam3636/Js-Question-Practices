// https://edabit.com/challenge/KcMmQE3bhxvfiYquQ?tab=comments&commentId=Ygo63v6N9SgEXD2Fr

/*
Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.

👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
countOnes(0) ➞ 0
countOnes(100) ➞ 3
countOnes(999) ➞ 8
*/

// My Sol-01:
function countOnes(i) {
  let toBinary = i.toString(2); // convert number to base 2 system

  // console.log(toBinary, typeof toBinary); // binaryNum  "string"

  return toBinary.split("").filter((num) => num === "1").length;
}

console.log(countOnes(12)); // 2
console.log(countOnes(0)); // 0
console.log(countOnes(100)); // 3
console.log(countOnes(101)); // 4
console.log(countOnes(999)); // 8
console.log(countOnes(1e9)); // 13
console.log(countOnes(123456789)); // 16
console.log(countOnes(1234567890)); // 12
