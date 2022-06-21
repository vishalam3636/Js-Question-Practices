//  https://edabit.com/challenge/FydPqxRiosP7EBiQh

/*
❓❓❓❓ Get Word Count ❓❓❓❓

Create a function that takes a string and returns the word count. The string will be a sentence.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
countWords("Just an example here move along") ➞ 6

countWords("This is a test") ➞ 4

countWords("What an easy task, right") ➞ 5
*/

// My Sol-01:
function countWords(str) {
  return str.split(" ").length;
}

console.log(countWords("It's high noon")); // 3
console.log(countWords("Is this easy mode")); // 4
console.log(countWords("What an easy task, right")); // 5
console.log(countWords("This is a test")); // 4
console.log(countWords("Just an example here move along")); // 6
console.log(countWords("How are you today?")); // 4

// My Sol-02:
function countWords2(str) {
  let count = 0;

  for (let elem of str) {
    elem === " " ? count++ : "";
  }

  return count + 1;
}

console.log(countWords2("It's high noon")); // 3
console.log(countWords2("Is this easy mode")); // 4
console.log(countWords2("What an easy task, right")); // 5
console.log(countWords2("This is a test")); // 4
console.log(countWords2("Just an example here move along")); // 6
console.log(countWords2("How are you today?")); // 4
