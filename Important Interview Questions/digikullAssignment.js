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

// console.log(isPalindrome("vishal"));
// console.log(isPalindrome("madhuri"));
// console.log(isPalindrome("Jahaj"));
// console.log(isPalindrome(121));

/*
❓❓❓❓❓❓❓❓❓❓❓❓❓
❓❓❓❓ Question 2: ❓❓❓❓✅✅✅✅✅✅✅✅✅✅✅✅
❓❓❓❓❓❓❓❓❓❓❓❓❓

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example:
Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
*/

// My Sol-02.1:
function removsDups(arr) {
  let newArr = [];

  for (let elem of arr) {
    if (newArr.includes(elem) === false) {
      newArr.push(elem);
    }
  }

  return newArr;
}
// console.log(removsDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/*
❓❓❓❓❓❓❓❓❓❓❓❓❓
❓❓❓❓ Question 3: ❓❓❓❓✅✅✅✅✅✅✅✅✅✅✅✅
❓❓❓❓❓❓❓❓❓❓❓❓❓

Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 1:
Input: s = "Hello World" Output: 5 Explanation: The last word is "World" with length 5.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 2:
Input: s = " fly me to the moon " Output: 4 Explanation: The last word is "moon" with length 4.
*/

//✅✅ My Sol-03.1: (splitting the string into array of words i.e, at each spaces. Then getting the last index of array and counting.)
function lastLength(str) {
  let splitStr = str.split(" ");
  let lastWord = splitStr[splitStr.length - 1];

  let count = 0;
  for (let i = 0; i <= lastWord.length - 1; i++) {
    lastWord[i] ? count++ : "";
  }
  return count;
}
// console.log(lastLength("Hello Word, i am Vishal"));
// console.log(lastLength2("Hello Word, i am Vishali "));

//✅✅ My Sol-03.2: (getting last index of "space", and running the loop from the next index that of space till end and adding one)
function lastLength2(str) {
  let lastIndexOfSpace = str.lastIndexOf(" ");

  let count = 0;
  for (let i = lastIndexOfSpace + 1; i <= str.length - 1; i++) {
    str[lastIndexOfSpace + 1] ? count++ : "";
  }

  return count;
}
// console.log(lastLength2("Hello Word, i am Vishal"));
// console.log(lastLength2("Hello Word, i am Vishali "));

/*
❓❓❓❓❓❓❓❓❓❓❓❓❓
❓❓❓❓ Question 4: ❓❓❓❓✅✅✅✅✅✅✅✅✅✅✅✅
❓❓❓❓❓❓❓❓❓❓❓❓❓

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 1:
Input: prices = [7,1,5,3,6,4] Output: 5 
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
🖊️ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 2:
Input: prices = [7,6,4,3,1] Output: 0 
Explanation: In this case, no transactions are done and the max profit = 0.
*/

// My Sol-01:
function profitStock(arr) {
  let profit = 0;

  for (let buy = 0; buy <= arr.length - 1; buy++) {
    for (sell = buy + 1; sell <= arr.length - 1; sell++) {
      if (arr[sell] > arr[buy]) {
        let onSell = arr[sell] - arr[buy];
        onSell > profit ? (profit = onSell) : "";
      }
    }
  }

  return profit;
}

// console.log(profitStock([7, 1, 5, 3, 6, 4]));
// console.log(profitStock([7, 6, 4, 3, 1]));

/*
❓❓❓❓❓❓❓❓❓❓❓❓❓
❓❓❓❓ Question 5: ❓❓❓❓
❓❓❓❓❓❓❓❓❓❓❓❓❓

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation: [4,-1,2,1] has the largest sum = 6.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 2:
Input: nums = [1] Output: 1

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Example 3:
Input: nums = [5,4,-1,7,8] Output: 23
*/

// My SOl-01:
function largestSumSubArray(arr) {
  let finalSum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    let sum = 0;
    for (let j = 0; j <= arr.length; j++) {
      // console.log(arr.slice(i, j));
      let sumSubArray = arr.slice(i, j).reduce((sum, curr) => sum + curr, 0);
      // console.log(sumSubArray);

      sumSubArray > sum ? (sum = sumSubArray) : "";
    }

    sum > finalSum ? (finalSum = sum) : "";
  }
  console.log(finalSum);
}
largestSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
largestSumSubArray([1]); // 1
largestSumSubArray([5, 4, -1, 7, 8]); // 23
