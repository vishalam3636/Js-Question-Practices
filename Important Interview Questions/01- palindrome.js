/*
❓❓❓❓❓❓❓❓❓❓❓❓❓
❓❓❓❓ Question 1: ❓❓❓❓✅✅✅✅✅✅✅✅✅✅✅✅
❓❓❓❓❓❓❓❓❓❓❓❓❓

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 1:
Input: x = 121 Output: true Explanation: 121 reads as 121 from left to right and from right to left.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 2:
Input: x = -121 Output: false Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

//✅✅ SOL-01.1:
function isPalindrome(str) {
  let val = (str + "").toLowerCase();

  let flag = true;
  for (let i = 0; i <= val.length / 2; i++) {
    if (val[i] !== val[val.length - 1 - i]) {
      flag = false;
    }
  }
  return flag ? "Its a palindrome" : "It's not a palindrome";
}

console.log(isPalindrome("vishal")); // not
console.log(isPalindrome("madhuri")); // not
console.log(isPalindrome("Jahaj")); // yes
console.log(isPalindrome(121)); // yes
