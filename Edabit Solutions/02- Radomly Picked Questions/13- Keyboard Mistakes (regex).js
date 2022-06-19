// https://edabit.com/challenge/wWYkyDdipiYxQoESb

/*
❓❓❓❓ Keyboard Mistakes ❓❓❓❓

Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

A is misinterpreted as 4
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"

keyboardMistakes("DUBL1N") ➞ "DUBLIN"

keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"

*/

// MY SOL-01:
function keyboardMistakes(str) {
  // let pattern = /[4501]/g;
  // return str.match(/\w/g);

  let splitStr = str.split("");
  // return splitStr;  // [ 'P', '4', 'R', '1', '5' ]

  for (let i = 0; i <= splitStr.length - 1; i++) {
    if (splitStr[i] === "1") {
      splitStr[i] = "I";
    } else if (splitStr[i] === "4") {
      splitStr[i] = "A";
    } else if (splitStr[i] === "5") {
      splitStr[i] = "S";
    } else if (splitStr[i] === "0") {
      splitStr[i] = "O";
    }
  }

  return splitStr.join("");
}

console.log(keyboardMistakes("MUB45H1R")); // "MUBASHIR"
console.log(keyboardMistakes("DUBL1N")); // "DUBLIN"
console.log(keyboardMistakes("51NG4P0RE")); // "SINGAPORE"
console.log(keyboardMistakes("P4K15T4N")); // "PAKISTAN"
console.log(keyboardMistakes("P4R15")); // "PARIS"

// OTHERS INTERESTING SOLUTIONS:
// sol-01:
function keyboardMistakes(txt) {
  return txt.replace(/[4501]/g, function (x) {
    return { 4: "A", 5: "S", 0: "O", 1: "I" }[x];
  });
}

// sol-02:
const keyboardMistakes = (txt) =>
  txt.replace(/\d/g, (n) => ({ 4: "A", 5: "S", 0: "O", 1: "I" }[n]));

// sol-03:
function keyboardMistakes(txt) {
  var chars = { 4: "A", 5: "S", 0: "O", 1: "I" };
  return txt.replace(/[4501]/g, (x) => chars[x]);
}

// sol-04:
function keyboardMistakes(s) {
  s = s.replace(/4/g, "A");
  s = s.replace("5", "S");
  s = s.replace("0", "O");
  s = s.replace("1", "I");
  return s;
}
