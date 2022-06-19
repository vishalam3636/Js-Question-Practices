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
console.log(removsDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// use object to get the sol in short.
