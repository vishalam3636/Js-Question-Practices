//  https://edabit.com/challenge/caeSeQ3K53GMQKenX

/*
❓❓❓❓ Distance Between Two Points ❓❓❓❓

In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

Two points on a Cartesian plane

Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325
getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414
getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

📝 Notes:
Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
The "distance" is the shortest distance between the two points, or the straight line generated from a to b.
*/

// My Sol-01:
function getDistance(a, b) {
  let x1 = a.x;
  let y1 = a.y;
  let x2 = b.x;
  let y2 = b.y;

  let distance = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  return distance > 0 ? Math.sqrt(distance).toFixed(3) * 1 : 0;
}

console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 })); // 6.325
console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })); // 1.414
console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 })); // 21.095
console.log(getDistance({ x: 4, y: 3 }, { x: 3, y: -2 })); // 5.099
console.log(getDistance({ x: -1, y: -1 }, { x: 10, y: 10 })); // 15.556
console.log(getDistance({ x: 100, y: 100 }, { x: 100, y: 100 })); // 0
console.log(getDistance({ x: 14239, y: -11222 }, { x: -12301, y: 12888 })); // 35856.153
