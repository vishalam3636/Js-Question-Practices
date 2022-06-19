//  https://edabit.com/challenge/9cB7BgGkeDcKwwhxX

/*
❓❓❓❓ Buggy Code (Part 3) ❓❓❓❓

Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
sumArray([1, 2, 3, 4, 5]) ➞ 15

sumArray([-1, 0, 1]) ➞ 0

sumArray([0, 4, 8, 12]) ➞ 24

📝 Notes:
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard.

// Buggy Code-
function sumArray(arr) {
	sum ,	
  for (i=0, i<arr, i++) {
	  sum+=arr[i]
	}
  return sum
}
*/

// My Sol-01:
function sumArray(arr) {
  sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, 0, 1])); // 0
console.log(sumArray([0, 4, 8, 12])); // 24
