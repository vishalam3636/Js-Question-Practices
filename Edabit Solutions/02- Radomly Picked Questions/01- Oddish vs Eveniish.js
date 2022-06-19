// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH?tab=comments&commentId=jZBfJkqCwqFsy9LqP

/*
❓❓❓❓ Oddish vs. Evenish ❓❓❓❓

Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, 
oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4.
oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
*/

// MY SOLUTION- 01
function oddishOrEvenish(num) {
  return String(num)
    .split("")
    .reduce((curr, val) => curr * 1 + val * 1) %
    2 ===
    0
    ? "Evenish"
    : "Oddish";
}

console.log(oddishOrEvenish(43)); // "Oddish"
console.log(oddishOrEvenish(373)); // "Oddish"
console.log(oddishOrEvenish(55551)); // "Oddish"
console.log(oddishOrEvenish(694)); // "Oddish"
console.log(oddishOrEvenish(4433)); // "Evenish"
console.log(oddishOrEvenish(11)); // "Evenish"
console.log(oddishOrEvenish(211112)); // "Evenish"
