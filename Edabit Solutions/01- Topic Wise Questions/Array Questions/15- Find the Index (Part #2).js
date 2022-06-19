//  https://edabit.com/challenge/z6Pxiw289JtaE2ndL

/*
❓❓❓❓ Find the Index (Part #2) ❓❓❓❓

Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
search([1, 2, 3, 4], 3) ➞ 2

search([2, 4, 6, 8, 10], 8) ➞ 3

search([1, 3, 5, 7, 9], 11) ➞ -1

📝 Notes: 
If the item is not present, return -1.
The given array is ordered.
*/

// My Sol-01:
function search(arr, item) {
  return arr.indexOf(item);
}

console.log(search([1, 2, 3, 4], 3)); // 2
console.log(search([2, 4, 6, 8, 10], 8)); // 3
console.log(search([1, 3, 5, 7, 9], 11)); // -1
console.log(search([1, 5, 7, 11, 25, 100, 200, 350], 5)); // 1
