// https://edabit.com/challenge/dgf76hmQ5Yw4FATFi

/*
❓❓❓❓ Skip the Drinks with Too Much Sugar ❓❓❓❓

Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

cola
fanta
Examples
skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]

📝 Notes:
The function returns an array of strings.
All drink names are in lowercase.
*/

// My Sol-01:
function skipTooMuchSugarDrinks(drinks) {
  return drinks.filter((val) => val !== "cola" && val !== "fanta");
}

console.log(skipTooMuchSugarDrinks(["cola", "fanta"])); //  []
console.log(skipTooMuchSugarDrinks(["cola", "fanta", "water"])); // ["water"]
console.log(skipTooMuchSugarDrinks(["cola"])); // []
console.log(skipTooMuchSugarDrinks([])); // []
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "fanta"])); // ["lemonade", "beer"]
console.log(skipTooMuchSugarDrinks(["water", "cola"])); // ["water"]
console.log(skipTooMuchSugarDrinks(["water", "tea"])); // ["water", "tea"]
