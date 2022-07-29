// 34. Find First and Last Position of Element in Sorted Array

/* 
Q. Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function searchRangeTS(nums: number[], target: number): number[] {
  const answer: number[] = [-1, -1];
  answer[0] = searchPosition(nums, target, true);
  if (answer[0] !== -1) {
    answer[1] = searchPosition(nums, target, false);
  }
  return answer;
}

const searchPositionTS = (
  nums: number[],
  target: number,
  isFirstIndex: boolean
): number => {
  let [answer, start] = [-1, 0];
  let end: number = nums.length - 1;

  while (start <= end) {
    let middle: number = Math.floor(start + (end - start) / 2);
    if (target < nums[middle]) {
      end = middle - 1;
    } else if (target > nums[middle]) {
      start = middle + 1;
    } else {
      answer = middle;
      if (isFirstIndex) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }
  return answer;
};
