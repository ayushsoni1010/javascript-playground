// 1295. Find Numbers with Even Number of Digits

//  Q. Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  nums.map((ele) => {
    if (Math.abs(ele).toString().length % 2 === 0) {
      count++;
    }
  });
  return count;
};
