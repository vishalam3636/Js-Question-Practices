// https://edabit.com/challenge/NL3ygNoPHcktc4mM6?tab=comments&commentId=9L6PR4cNBD9MWMTC8

/*
❓❓❓❓ String or Integer? ❓❓❓❓

Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
intOrString(8) ➞ "int"

intOrString("Hello") ➞ "str"

intOrString(9843532) ➞ "int"
*/

// My Sol-01:
function intOrString(param) {
  return typeof param === "number" ? "int" : "str";
}

console.log(intOrString(1)); // "int"
console.log(intOrString("HELLO")); // "str"
console.log(intOrString("edabit")); // "str"
console.log(intOrString(873432874)); // "int"
console.log(intOrString(5)); // "int"
