// https://edabit.com/challenge/8zbTPvexR9Aei3Csp

/*
❓❓❓❓ Spaces Between Each Character ❓❓❓❓

Create a function that takes a string and returns a string with spaces in between all of the characters.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
spaceMeOut("space") ➞ "s p a c e"

spaceMeOut("far out") ➞ "f a r   o u t"

spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

📝 Notes:
Treat a space as its own character (i.e. leave three spaces between words).
*/

console.log("**** My SOl-01 ****");
//  My Sol-01:
function spaceMeOut(str) {
  let newStr = [];

  for (let i = 0; i <= str.length - 1; i++) {
    newStr.push(str[i]);
    if (i !== str.length - 1) {
      newStr.push(" ");
    }
  }

  return newStr.join("");
}

console.log(spaceMeOut("space")); //  "s p a c e", "Example #1"
console.log(spaceMeOut("far out")); // "f a r   o u t", "Example #2"
console.log(spaceMeOut("elongated musk")); // "e l o n g a t e d   m u s k", "Example #3"
console.log(spaceMeOut("long")); // "l o n g"
console.log(spaceMeOut("123")); // "1 2 3"
console.log(spaceMeOut("a1b2c3")); //"a 1 b 2 c 3"

console.log("**** My SOl-02 ****");
//  My Sol-02:
function spaceMeOut2(str) {
  let newStr = "";

  for (let i = 0; i <= str.length - 1; i++) {
    newStr = newStr + str[i] + " ";
  }

  return newStr.trim();
}

console.log(spaceMeOut2("space")); //  "s p a c e", "Example #1"
console.log(spaceMeOut2("far out")); // "f a r   o u t", "Example #2"
console.log(spaceMeOut2("elongated musk")); // "e l o n g a t e d   m u s k", "Example #3"
console.log(spaceMeOut2("long")); // "l o n g"
console.log(spaceMeOut2("123")); // "1 2 3"
console.log(spaceMeOut2("a1b2c3")); //"a 1 b 2 c 3"

console.log("**** My SOl-3 ****");
//  My Sol-03:
function spaceMeOut3(str) {
  let newStr = "";

  for (let i = 0; i <= str.length - 1; i++) {
    i !== str.length - 1
      ? (newStr = newStr + str[i] + " ")
      : (newStr += str[i]);
  }

  return newStr;
}

console.log(spaceMeOut3("space")); //  "s p a c e", "Example #1"
console.log(spaceMeOut3("far out")); // "f a r   o u t", "Example #2"
console.log(spaceMeOut3("elongated musk")); // "e l o n g a t e d   m u s k", "Example #3"
console.log(spaceMeOut3("long")); // "l o n g"
console.log(spaceMeOut3("123")); // "1 2 3"
console.log(spaceMeOut3("a1b2c3")); //"a 1 b 2 c 3"
