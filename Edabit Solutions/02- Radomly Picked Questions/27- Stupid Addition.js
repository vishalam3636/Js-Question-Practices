//  https://edabit.com/challenge/GABaDpxGZGFBdQPjs

/*
❓❓❓❓ Stupid Addition ❓❓❓❓ 

Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
stupidAddition(1, 2) ➞ "12"

stupidAddition("1", "2") ➞ 3

stupidAddition("1", 2) ➞ null

📝 Notes:
If the two parameters are different data types, return null.
All parameters will either be strings or integers.
*/

// My Sol-01:
function stupidAddition(a, b) {
  if (typeof a != typeof b) {
    return null;
  } else if (typeof a === "string") {
    return a * 1 + b * 1;
  } else if (typeof a === "number") {
    return "" + a + b;
  }
}

console.log(stupidAddition(1, 2)); // "12", "Both parameters are integers, therefore they should be concatenated"
console.log(stupidAddition("1", "2")); //  3, "Both parameters are strings, therefore they should be added"
console.log(stupidAddition(1, "2")); // null, "The parameters are different data types, therefore None should be returned"
console.log(stupidAddition("1", 2)); // null, "The parameters are different data types, therefore None should be returned"
