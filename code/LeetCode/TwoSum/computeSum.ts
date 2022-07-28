// 1. Two Sum

// Q. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function computetwoSum(nums: number[], target: number): number[] {
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
