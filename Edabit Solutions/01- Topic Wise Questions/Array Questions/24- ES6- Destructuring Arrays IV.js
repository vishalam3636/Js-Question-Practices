// https://edabit.com/challenge/wJuXYhgetMtD4Gezj

/*
❓❓❓❓ ES6: Destructuring Arrays IV ❓❓❓❓

There is an easy way to assign to array values to the nth index by using rest parameter syntax.

var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2
But how could I make tail = [2, 3, 4] instead of tail = 2?

📝 Notes:
Check the Resources tab for more examples.

QUESTION-
// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element
const str = '[head, tail] = [1, 2, 3, 4]'
*/

// My SOl-01:
const str = "[head, ...tail] = [1, 2, 3, 4]";

// testc cases-
eval(str);

const validString = (str) => {
  return /\.\.\./.test(str) ? "rest" : false;
};

const validArray = (str) => {
  return /\[\s*1\s*\,\s*2\s*\,\s*3\s*\,\s*4\s*\]$/.test(str) ? "array" : false;
};

console.log(validString(str)); // "rest", "You need to use the Rest element."
console.log(validArray(str), "array"); // "[1, 2, 3, 4] should remain untouched."
console.log(head, 1); // "head should equal to 1"
console.log(tail, [2, 3, 4]); // "tail should equal to [2, 3, 4]"
