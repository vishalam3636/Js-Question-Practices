// https://edabit.com/challenge/PTiLYyb4A69KZtBCg?tab=comments&commentId=YTqBpH97BiLk98KF3

/*
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false
lessThanOrEqualToZero(0) ➞ true
lessThanOrEqualToZero(-2) ➞ true

📝 Notes
🖊️ Don't forget to return the result.
*/

// My Sol-01
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(0)); // true
console.log(lessThanOrEqualToZero(-5)); // // true

// My Sol-02
function lessThanOrEqual2(num) {
  // return num <= 0 ? true : false;

  return num <= 0; // comaprison operator itself returns "true" or "false"
}

console.log(lessThanOrEqual2(5)); // false
console.log(lessThanOrEqual2(0)); // true
console.log(lessThanOrEqual2(-5)); // // true
