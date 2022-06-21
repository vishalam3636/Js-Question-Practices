// https://edabit.com/challenge/mN98zKeSSLnXwKz8C

/*
❓❓❓❓ Get the File Name❓❓❓❓

Create a function that returns the selected filename from a path. Include the extension in your answer.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

getFilename("ffprobe.exe") ➞ "ffprobe.exe"

📝 Notes:
Tests will include both absolute and relative paths.
For simplicity, all paths will include forward slashes.
*/

console.log("**** My Sol-01 ****");
// My Sol-01:
function getFilename(path) {
  let splitPath = path.split("/");
  return splitPath[splitPath.length - 1];
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")); // "edabit.txt"
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")); // "Beethoven_5.mp3"
console.log(getFilename("ffprobe.exe")); // "ffprobe.exe"
console.log(getFilename("Music/Drafts/unfinished2.midi")); // "unfinished2.midi"
console.log(getFilename("C:/Users/chad/OneDrive/Desktop/Atom.lnk"));
("Atom.lnk");
console.log(
  getFilename(
    "senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe"
  )
); // "DDLC.exe"

console.log("**** My Sol-02 ****");
// My Sol-02:
function getFilename2(path) {
  let lastIndex = path.lastIndexOf("/");
  let str = "";

  for (let i = lastIndex + 1; i <= path.length - 1; i++) {
    str += path[i];
  }

  return str;
}

console.log(getFilename2("C:/Projects/pil_tests/ascii/edabit.txt")); // "edabit.txt"
console.log(getFilename2("C:/Users/johnsmith/Music/Beethoven_5.mp3")); // "Beethoven_5.mp3"
console.log(getFilename2("ffprobe.exe")); // "ffprobe.exe"
console.log(getFilename2("Music/Drafts/unfinished2.midi")); // "unfinished2.midi"
console.log(getFilename2("C:/Users/chad/OneDrive/Desktop/Atom.lnk"));
("Atom.lnk");
console.log(
  getFilename2(
    "senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe"
  )
); // "DDLC.exe"

console.log("**** My Sol-03 ****");
// My Sol-03:
function getFilename3(path) {
  let str = "";

  for (let i = path.length - 1; i >= 0; i--) {
    if (path[i] !== "/") {
      str += path[i];
    } else {
      break;
    }
  }

  return str.split("").reverse().join("");
}

console.log(getFilename3("C:/Projects/pil_tests/ascii/edabit.txt")); // "edabit.txt"
console.log(getFilename3("C:/Users/johnsmith/Music/Beethoven_5.mp3")); // "Beethoven_5.mp3"
console.log(getFilename3("ffprobe.exe")); // "ffprobe.exe"
console.log(getFilename3("Music/Drafts/unfinished2.midi")); // "unfinished2.midi"
console.log(getFilename3("C:/Users/chad/OneDrive/Desktop/Atom.lnk"));
("Atom.lnk");
console.log(
  getFilename3(
    "senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe"
  )
); // "DDLC.exe"
