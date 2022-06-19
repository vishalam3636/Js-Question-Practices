// https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd

/*
❓❓❓❓ Return the Factorial ❓❓❓❓ 

Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
factorial(3) ➞ 6
factorial(5) ➞ 120
factorial(13) ➞ 6227020800


📝 Notes:
Assume all inputs are greater than or equal to 0.
*/

//My sol-01:
function factorial(int) {
  let result = int;

  for (let i = int - 1; i > 0; i--) {
    result = i * result;
  }

  return result;
}

console.log(factorial(2)); // 2
console.log(factorial(6)); //720
console.log(factorial(3)); // 6
console.log(factorial(12)); // 479001600
console.log(factorial(5)); // 120
