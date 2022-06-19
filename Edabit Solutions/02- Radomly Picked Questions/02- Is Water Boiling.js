// https://edabit.com/challenge/fy5rEBBtnhAN7FzzE?tab=comments&commentId=9tPGZPEyh7hwnz7y6

/*
❓❓❓❓ Is the Water Boiling? ❓❓❓❓

Create a function that determines if the temp of the water is considered boiling or not. 
temp will be measured in fahrenheit and celsius.

📝 Notes
🖊️ The boiling point of water is 212F in fahrenheit and 100C in celsius.
*/

// My Sol-01

function isBoiling(temp) {
  let unit = temp.split("").pop();
  let val = temp.slice(0, temp.length - 1);

  return (val >= 212 && unit === "F") || (val >= 100 && unit === "C")
    ? true
    : false;
}

console.log(isBoiling("212F")); // true
console.log(isBoiling("100C")); // true
console.log(isBoiling("0F")); // false
console.log(isBoiling("-1F")); // false
console.log(isBoiling("213F")); // true
console.log(isBoiling("104C")); // true
console.log(isBoiling("-10F")); // false
console.log(isBoiling("120F")); // false
