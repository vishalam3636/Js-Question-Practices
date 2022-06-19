// https://edabit.com/challenge/pEzxi4MqHGrAi7ZdA

/*
❓❓❓❓ Find the Index (Part 1) ❓❓❓❓ 

Create a function that finds the index of a given item.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
search([1, 5, 3], 5) ➞ 1

search([9, 8, 3], 3) ➞ 2

search([1, 2, 3], 4) ➞ -1

📝 Notes:
If the item is not present, return -1.
*/

console.log("**** My Sol:01 *****");
// My Sol-01:
function search(arr, item) {
  return arr.indexOf(item);
}

console.log(search([1, 5, 3], 5)); // 1
console.log(search([9, 8, 3], 3)); // 2
console.log(search([1, 2, 3], 4)); // -1
console.log(search([1, 5, 3, 10, 17, 20, -6], 20)); // 5

console.log("**** My Sol:02 *****");
// reference: https://flaviocopes.com/how-to-get-index-in-for-of-loop/
// My Sol-02:
function search2(arr, item) {
  if (!arr.includes(item)) {
    return -1;
  } else {
    for (let [i, elem] of arr.entries()) {
      if (elem === item) {
        return i;
      }
    }
  }
}

console.log(search2([1, 5, 3], 5)); // 1
console.log(search2([9, 8, 3], 3)); // 2
console.log(search2([1, 2, 3], 4)); // -1
console.log(search2([1, 5, 3, 10, 17, 20, -6], 20)); // 5
