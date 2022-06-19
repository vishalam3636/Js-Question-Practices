// https://edabit.com/challenge/jbR9NupEL8zAZkbKx?tab=comments&commentId=7bFRFAoftgte4yhQy

/*
❓❓❓❓ Match the Last Item ❓❓❓❓

Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

Notes:
The array is always filled with items.
*/

// My Sol-01:
function matchLastItem(arr) {
  return (
    arr.filter((val, ind) => ind < arr.length - 1).join("") ===
    arr[arr.length - 1]
  );
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); // true
console.log(matchLastItem([0, 1, 2, 3, 4, 5, "12345"])); // false
console.log(matchLastItem(["for", "mi", "da", "bel", "formidable"])); // false
console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); // true
console.log(matchLastItem([1, 1, 1, "11"])); // false
console.log(
  matchLastItem([
    "tocto",
    "G8G",
    "xtohkgc",
    "3V8",
    "ctyghrs",
    100.88,
    "fyuo",
    "Q",
    "toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ",
  ])
); // true

// Other Solution:
function matchLastItemOther(arr) {
  return arr.pop() === arr.join("");
}

console.log(matchLastItemOther(["rsq", "6hi", "g", "rsq6hig"])); // true
console.log(matchLastItemOther([0, 1, 2, 3, 4, 5, "12345"])); // false
console.log(matchLastItemOther(["for", "mi", "da", "bel", "formidable"])); // false
console.log(matchLastItemOther([8, "thunder", true, "8thundertrue"])); // true
console.log(matchLastItemOther([1, 1, 1, "11"])); // false
console.log(
  matchLastItemOther([
    "tocto",
    "G8G",
    "xtohkgc",
    "3V8",
    "ctyghrs",
    100.88,
    "fyuo",
    "Q",
    "toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ",
  ])
); // true
