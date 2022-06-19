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
