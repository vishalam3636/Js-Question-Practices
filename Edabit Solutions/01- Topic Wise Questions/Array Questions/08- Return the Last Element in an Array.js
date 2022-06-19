//  https://edabit.com/challenge/7JBTN4TbaxJQMdX9W

/*
❓❓❓❓ Return the Last Element in an Array ❓❓❓❓

Create a function that accepts an array and returns the last item in the array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true

📝Notes:
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

console.log("***** My solution-01 ******");
// My Sol-01:
function getLastItem(arr) {
  return arr[arr.length - 1];
}

console.log(getLastItem(["Cat", "Dog", "Duck"])); // 'Duck'
console.log(getLastItem([1, 2, 3])); // 3
console.log(getLastItem([undefined])); // undefined
console.log(getLastItem([true, false, false, true])); // true
console.log(getLastItem([7, "String", false, undefined, null])); // null
console.log(getLastItem([false])); // false
console.log(getLastItem([undefined, undefined, undefined])); // undefined
console.log(getLastItem([1, 2, 3, 56, 87, 23, 65, 45])); // 45
console.log(getLastItem(["Apple", "Orange", undefined])); // undefined
console.log(getLastItem([true, false, "Apple"])); // 'Apple'
console.log(getLastItem([null, null, null])); // null
console.log(getLastItem([1])); // 1

console.log("***** My solution-02 *****");
// My Sol-02:
function getLastItem2(arr) {
  return arr.pop();
}

console.log(getLastItem2(["Cat", "Dog", "Duck"])); // 'Duck'
console.log(getLastItem2([1, 2, 3])); // 3
console.log(getLastItem2([undefined])); // undefined
console.log(getLastItem2([true, false, false, true])); // true
console.log(getLastItem2([7, "String", false, undefined, null])); // null
console.log(getLastItem2([false])); // false
console.log(getLastItem2([undefined, undefined, undefined])); // undefined
console.log(getLastItem2([1, 2, 3, 56, 87, 23, 65, 45])); // 45
console.log(getLastItem2(["Apple", "Orange", undefined])); // undefined
console.log(getLastItem2([true, false, "Apple"])); // 'Apple'
console.log(getLastItem2([null, null, null])); // null
console.log(getLastItem2([1])); // 1
