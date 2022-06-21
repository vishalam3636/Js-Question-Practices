/*
❓❓❓❓ Shapes With N Sides ❓❓❓❓

Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"

📝 Notes:
There won't be any tests with a number below 1 or greater than 10.
Return the output in lowercase.
The challenge is intended to be completed without conditionals (it would take too long)!
*/

// My Sol-01:
function nSidedShape(n) {
  switch (n) {
    case 1:
      return "circle";
    case 2:
      return "semi-circle";
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    case 9:
      return "nonagon";
    case 10:
      return "decagon";
  }
}
console.log(nSidedShape(1)); // "circle"
console.log(nSidedShape(2)); // "semi-circle"
console.log(nSidedShape(3)); // "triangle"
console.log(nSidedShape(4)); // "square"
console.log(nSidedShape(5)); // "pentagon"
console.log(nSidedShape(6)); // "hexagon"
console.log(nSidedShape(7)); // "heptagon"
console.log(nSidedShape(8)); // "octagon"
console.log(nSidedShape(9)); // "nonagon"
console.log(nSidedShape(10)); // "decagon"

// Others Interesting Solution:
function nSidedShapeOther(n) {
  let shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  return shapes[n];
}

console.log(nSidedShapeOther(1)); // "circle"
console.log(nSidedShapeOther(2)); // "semi-circle"
console.log(nSidedShapeOther(3)); // "triangle"
console.log(nSidedShapeOther(4)); // "square"
console.log(nSidedShapeOther(5)); // "pentagon"
console.log(nSidedShapeOther(6)); // "hexagon"
console.log(nSidedShapeOther(7)); // "heptagon"
console.log(nSidedShapeOther(8)); // "octagon"
console.log(nSidedShapeOther(9)); // "nonagon"
console.log(nSidedShapeOther(10)); // "decagon"
