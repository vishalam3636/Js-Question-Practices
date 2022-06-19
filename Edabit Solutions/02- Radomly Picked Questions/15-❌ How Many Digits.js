// https://edabit.com/challenge/arwPSBjeBR4QjsdYG

/*
❓❓❓❓ How Many Digits? ❓❓❓❓ 

Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
sumDigits(100) ➞ 3

sumDigits(1000) ➞ 4

sumDigits(1) ➞ 1
*/

// My Sol-01:
function sumDigits(n) {
  let stringedNum = n.toString();
  let splitStringedNum = stringedNum.split("");

  // return stringedNum;
  // return splitStringedNum;

  let count = 0;
  for (let elem of splitStringedNum) {
    count++;
  }

  return count;
}

console.log(sumDigits(100)); // 3
console.log(sumDigits(1000)); // 4
console.log(sumDigits(12345)); // 5
console.log(sumDigits(1000000000)); // 10
console.log(sumDigits(145874589632)); // 12
console.log(sumDigits(0)); // 1
console.log(sumDigits(12345698745254856320)); // 20
console.log(sumDigits(123456789)); // 9
console.log(sumDigits(1234569874525485632012345698745254856320)); // 40
console.log(sumDigits(1232458)); // 7

// this test-case giving problem
// console.log(sumDigits(1234569874525485632012345698745254856320)); // 40
