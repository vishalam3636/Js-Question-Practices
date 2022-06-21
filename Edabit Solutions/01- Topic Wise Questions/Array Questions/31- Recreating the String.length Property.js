// https://edabit.com/challenge/bvPBzNq9FutDb2X6J

/*
❓❓❓❓ Recreating the String.length Property ❓❓❓❓

Create a function which returns the length of a string, 💀WITHOUT using String.length property💀.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
length("Hello World") ➞ 11

length("Edabit") ➞ 6

length("wash your hands!") ➞ 16
*/

// My Sol-01:
function length(str) {
  let count = 0;

  for (let elem of str) {
    count++;
  }

  return count;
}

console.log(length("Hello World")); // 11
console.log(length("Edabit")); // 6
console.log(length("wash your hands!")); // 16
console.log(length("34445")); // 5
console.log(length("   ")); // 3
console.log(length("")); // 0
console.log(length("%%$")); // 3

console.log("***** Others Solution ****");
// Others Interesting Solution:
function lengthOther(str) {
  return str.lastIndexOf("");
}

console.log(lengthOther("Hello World")); // 11
console.log(lengthOther("Edabit")); // 6
console.log(lengthOther("wash your hands!")); // 16
console.log(lengthOther("34445")); // 5
console.log(lengthOther("   ")); // 3
console.log(lengthOther("")); // 0
console.log(lengthOther("%%$")); // 3
