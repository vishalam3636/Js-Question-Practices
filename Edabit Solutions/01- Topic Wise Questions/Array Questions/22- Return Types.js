// https://edabit.com/challenge/QWmvQsrSuQRmEN8ne

/*
❓❓❓❓ Return Types ❓❓❓❓

Create a function that takes an array and returns the types of values (data types) in a new array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]

📝 Notes:
Check the Resources tab for help if needed.
Remember Arrays & Null in JS are treated as object, hence the examples
*/

// My Sol-01:
function arrayValuesTypes(arr) {
  return arr.map((val) => typeof val);
}

console.log(arrayValuesTypes([1, 10])); // ['number', 'number']
console.log(arrayValuesTypes([["hello", 1], 10])); //  ['object', 'number']
console.log(arrayValuesTypes(["shashwat", 10, 90])); // ['string', 'number', 'number']
console.log(arrayValuesTypes([[], true])); // ["object", "boolean"]
console.log(arrayValuesTypes([false, false, "true"])); // ["boolean","boolean","string"]
console.log(arrayValuesTypes([1, 10])); // ["number", "number"]
console.log(arrayValuesTypes([undefined, null])); // ["undefined", "object"]
console.log(
  arrayValuesTypes([
    function () {
      let x = 10;
    },
    10,
  ])
); // ["function", "number"]
