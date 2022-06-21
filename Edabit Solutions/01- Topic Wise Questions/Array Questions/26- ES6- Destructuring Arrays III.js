// https://edabit.com/challenge/STfAEAE5fjNmFCsvf

/*
❓❓❓❓ ES6: Destructuring Arrays III ❓❓❓❓

You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr

But you can also skip over items in the array being destructured.

⁉️⁉️ Question:
// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr = ["eyes", "nose", "lips", "ears"]
var [👉🏽Create variable lips here and assign it to arr[2]👈🏽] = arr
*/

// My Sol-01:
const arr = ["eyes", "nose", "lips", "ears"];
var [, , lips] = arr;

console.log(lips, arr[2]);
