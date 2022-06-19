// https://edabit.com/challenge/QsNu3W2JMekxiApxH

/*
❓❓❓❓ Simple Letters ❓❓❓❓

Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
str1 = "mubashir"
str2 = "edabit"

longestString(str1, str2) ➞ "abdehimrstu"
// Contains sorted and distinct letters of the given strings.

str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "abcdefghijklmnopqrstuvwxyz"

longestString(str1, str2) ➞ "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.
*/

// My Sol-01:
function longestString(str1, str2) {
  let newStr = str1 + str2;
  let sortSplitArr = newStr.split("").sort();
  return [...new Set(sortSplitArr)].join("");
}

console.log(longestString("mubashir", "edabit")); // "abdehimrstu"
console.log(longestString("pakistan", "airforce")); // "acefiknoprst"
console.log(longestString("", "e")); //  "e"
console.log(longestString("", "")); // ""
console.log(longestString("noooo", "yesssss")); // "enosy"
console.log(longestString("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(
  longestString("loopingisfunbutdangerous", "lessdangerousthancoding")
); //  "abcdefghilnoprstu"
console.log(longestString("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"
console.log(longestString("lordsofthefallen", "gamekult")); // "adefghklmnorstu"
