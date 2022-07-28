// 136. Single Number

// Q. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumberTS(nums: number[]): number {
  let result: number = nums[0];
  for (let i: number = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}
