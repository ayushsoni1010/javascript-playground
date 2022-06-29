// 162. Find Peak Element

// Q. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (nums[middle] > nums[middle + 1]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return start;
};
