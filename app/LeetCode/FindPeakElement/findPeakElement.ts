// 162. Find Peak Element

// Q. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

function findPeakElementIndex(nums: number[]): number {
  let start: number = 0;
  let end: number = nums.length - 1;

  while (start < end) {
    let middle: number = Math.floor(start + (end - start) / 2);
    if (nums[middle] > nums[middle + 1]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return start;
}
