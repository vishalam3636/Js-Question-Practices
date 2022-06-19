// https://edabit.com/challenge/nkp5xkZwbBH5Ape8b

/*
❓❓❓❓ Characters in Shapes ❓❓❓❓ 

Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
countCharacters([
  "###",
  "###",
  "###"
]) ➞ 9

countCharacters([
  "22222222",
  "22222222",
]) ➞ 16

countCharacters([
  "------------------"
]) ➞ 18

countCharacters([]) ➞ 0

countCharacters(["", ""]) ➞ 0

📝 Notes:
Return 0 if the given array is empty.
*/

// My Sol-01:
function countCharacters(arr) {
  return arr.join("").length;
}

console.log(countCharacters(["###", "###", "###"])); // 9
console.log(countCharacters(["22222222", "22222222"])); // 16
console.log(countCharacters(["------------------"])); // 18
console.log(countCharacters([])); // 0
console.log(countCharacters(["", ""])); // 0
