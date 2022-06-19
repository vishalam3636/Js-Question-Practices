/*
❓❓❓❓❓❓❓❓❓❓❓❓❓
❓❓❓❓ Question 3: ❓❓❓❓✅✅✅✅✅✅✅✅✅✅✅✅
❓❓❓❓❓❓❓❓❓❓❓❓❓

Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 1:
Input: s = "Hello World" Output: 5 Explanation: The last word is "World" with length 5.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 2:
Input: s = " fly me to the moon " Output: 4 Explanation: The last word is "moon" with length 4.
*/

//✅✅ My Sol-03.1: (splitting the string into array of words i.e, at each spaces. Then getting the last index of array and counting.)
function lastLength(str) {
  let splitStr = str.split(" ");
  let lastWord = splitStr[splitStr.length - 1];

  let count = 0;
  for (let i = 0; i <= lastWord.length - 1; i++) {
    lastWord[i] ? count++ : "";
  }
  return count;
}
// console.log(lastLength("Hello Word, i am Vishal"));
// console.log(lastLength2("Hello Word, i am Vishali "));

//✅✅ My Sol-03.2: (getting last index of "space", and running the loop from the next index that of space till end and adding one)
function lastLength2(str) {
  let lastIndexOfSpace = str.lastIndexOf(" ");

  let count = 0;
  for (let i = lastIndexOfSpace + 1; i <= str.length - 1; i++) {
    str[lastIndexOfSpace + 1] ? count++ : "";
  }

  return count;
}

// console.log(lastLength2("Hello Word, i am Vishal"));
// console.log(lastLength2("Hello Word, i am Vishali "));

//✅✅ My Sol-03.3: (ulta loop chalao aur count++ krte jao, jaise hi mile space i.e, " " , waise hi break kr do loop ko)
function lastString(str) {
  let count = 0;
  let arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      count++;
    } else {
      break;
    }
  }
  return count;
}
console.log(lastString("fly me to the moon"));
console.log(lastLength2("Hello Word, i am Vishal"));
console.log(lastLength2("Hello Word, i am Vishali"));
console.log(lastLength2("Hello Word, i am Vishali "));
