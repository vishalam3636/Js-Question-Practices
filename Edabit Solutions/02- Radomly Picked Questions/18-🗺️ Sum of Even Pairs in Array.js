// https://edabit.com/challenge/7fLxcoScQJBhMFvKK

/*
❓❓❓❓ Sum of Even Pairs in Array❓❓❓❓ 

Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

To illustrate:
[11, 15, 6, 8, 9, 10]

11 + 15 = 26 = true
15 + 6 = 21 = false
6 + 8 = 14 = true
8+ 9 = 17 = false
9 + 10 = 19 = false
Therefore, solution = [true, false, true, false, false]

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
oddSum([11, 15, 6, 8, 9, 10]) ➞ [true, false, true, false, false]

oddSum([12, 21, 5, 9, 65, 32]) ➞ [false, true, true, true, false]

oddSum([1, 2, 3, 4, 5, 6]) ➞ [false, false, false, false, false]


📝 Notes:
Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.
*/

// My SOl-01:
function oddSum(numbers) {
  let arr = [];
  for (let i = 0; i <= numbers.length - 2; i++) {
    let num = numbers[i] + numbers[i + 1];

    if (num % 2 === 0) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
}

// console.log(oddSum([11, 15, 6, 8, 9, 10])); // [true, false, true, false, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6])); // [false, false, false, false, false]
// console.log(oddSum([4, 5, 6, 7, 9, 45, 12, 32, 65, 49, 45, 840])); // [false,false,false,true,true,false,true,false,true,true,false]
// console.log(oddSum([88, 45, 654, 123])); //  [false, false, false]
// console.log(oddSum([98, 4, 12, 565, 798, 465, 13, 1, 365, 14, 89, 565])); // [true,true,false,false,false,true,true,true,false,false,true,]

// OTHERS SOLUTION:
const oddSumOther = (n) => n.slice(1).map((x, i) => (x + n[i]) % 2 == 0);

console.log(oddSumOther([11, 15, 6, 8, 9, 10])); // [true, false, true, false, false]
console.log(oddSumOther([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
console.log(oddSumOther([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
console.log(oddSumOther([1, 2, 3, 4, 5, 6])); // [false, false, false, false, false]
console.log(oddSumOther([4, 5, 6, 7, 9, 45, 12, 32, 65, 49, 45, 840])); // [false,false,false,true,true,false,true,false,true,true,false]
console.log(oddSumOther([88, 45, 654, 123])); //  [false, false, false]
console.log(oddSumOther([98, 4, 12, 565, 798, 465, 13, 1, 365, 14, 89, 565])); // [true,true,false,false,false,true,true,true,false,false,true,]
