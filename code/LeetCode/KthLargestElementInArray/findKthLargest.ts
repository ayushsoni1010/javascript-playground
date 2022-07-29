// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**

  Q. Given an integer array nums and an integer k, return the kth largest element in the array.

  Note that it is the kth largest element in the sorted order, not the kth distinct element.

  You must solve it in O(n) time complexity. 

**/

function findKthLargestTS(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}
