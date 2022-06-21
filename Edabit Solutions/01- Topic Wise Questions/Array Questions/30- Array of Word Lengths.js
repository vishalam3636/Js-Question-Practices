// https://edabit.com/challenge/B9yPEStmax7Jxb9Dj

/*
❓❓❓❓ Array of Word Lengths ❓❓❓❓

Create a function that takes an array of words and transforms it into an array of each word's length.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
wordLengths(["hello", "world"]) ➞ [5, 5]

wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

📝 Notes:
No test case will contain punctuation.
Arrays can be of various lengths.
*/

console.log("***** My Sol-01: ******");
console.log("***** My Sol-01: ******");
// My Sol-01:
function wordLengths(arr) {
  return arr.map((val) => val.length);
}

console.log(wordLengths(["hello", "world"])); // [5, 5] "Example #1"
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); // [9, 12, 9] "Example #2"
console.log(
  wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])
); // [3, 5, 9, 4, 2, 3, 8] "Example #3"
console.log(
  wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"])
); // [7, 5, 3, 3, 6, 2, 4]
console.log(wordLengths(["Programming", "is", "fun"])); // [11, 2, 3]

console.log("**** My Sol-02: ****");
// My Sol-02:
function wordLengths2(arr) {
  let newArr = [];

  for (let elem of arr) {
    newArr.push(elem.length);
  }

  return newArr;
}

console.log(wordLengths2(["hello", "world"])); // [5, 5] "Example #1"
console.log(wordLengths2(["Halloween", "Thanksgiving", "Christmas"])); // [9, 12, 9] "Example #2"
console.log(
  wordLengths2(["She", "sells", "seashells", "down", "by", "the", "seashore"])
); // [3, 5, 9, 4, 2, 3, 8] "Example #3"
console.log(
  wordLengths2(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"])
); // [7, 5, 3, 3, 6, 2, 4]
console.log(wordLengths2(["Programming", "is", "fun"])); // [11, 2, 3]
