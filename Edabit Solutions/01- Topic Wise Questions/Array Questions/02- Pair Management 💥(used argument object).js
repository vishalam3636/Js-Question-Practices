// https://edabit.com/challenge/BFnsRqe8PFvEwcRNt

/*
❓❓❓❓ Pair Management ❓❓❓❓

Given two arguments, return an array which contains these two arguments.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
*/

console.log("MY SOL-01:)");
// My sol-01:
function makePair(num1, num2) {
  return [num1, num2];
}

console.log(makePair(1, 2)); // [1, 2]
console.log(makePair(21, 82)); // [21, 82]
console.log(makePair(4213, 526)); // [4213, 526]

console.log("MY SOL-02:)");
// My Sol-02:
function makePair2(num1, num2) {
  return new Array(num1, num2);
}

console.log(makePair2(1, 2)); // [1, 2]
console.log(makePair2(21, 82)); // [21, 82]
console.log(makePair2(4213, 526)); // [4213, 526]

console.log("MY SOL-03:)");
// My Sol-03:
function makePair3(num1, num2) {
  // return arguments.length; // object , but not same as regular object

  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }

  return arr;
}

console.log(makePair3(1, 2)); // [1, 2]
console.log(makePair3(21, 82)); // [21, 82]
console.log(makePair3(4213, 526)); // [4213, 526]

console.log("Others sol:)");
// Others sol:
function makePairOther(num1, num2) {
  return [...arguments];
}

console.log(makePairOther(1, 2)); // [1, 2]
console.log(makePairOther(21, 82)); // [21, 82]
console.log(makePairOther(4213, 526)); // [4213, 526]
