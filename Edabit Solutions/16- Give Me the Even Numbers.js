//  https://edabit.com/challenge/BK7ydsgqXKggohdc6

/*

❓❓❓❓ Give Me the Even Numbers ❓❓❓❓

Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻Examples:
sumEvenNumsInRange(10, 20) ➞ 90
// 10, 12, 14, 16, 18, 20

sumEvenNumsInRange(51, 150) ➞ 5050

sumEvenNumsInRange(63, 97) ➞ 1360


📝 Notes:
Remember that the start and stop values are inclusive.
*/

// My Sol-01:
function sumEvenNumsInRange(start, stop) {
  let count = 0;

  for (let i = start; i <= stop; i++) {
    if (i % 2 === 0) {
      count += i;
    }
  }
  return count;
}

console.log(sumEvenNumsInRange(51, 150)); // 5050
console.log(sumEvenNumsInRange(70, 100)); // 1360
console.log(sumEvenNumsInRange(99, 110)); // 630
console.log(sumEvenNumsInRange(63, 97)); // 1360
console.log(sumEvenNumsInRange(10, 20)); // 90

// console.log(sumEvenNumsInRange(4, 10));
