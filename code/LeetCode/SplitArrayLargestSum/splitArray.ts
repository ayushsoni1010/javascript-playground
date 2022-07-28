// 410. Split Array Largest Sum

// Q. Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

// Write an algorithm to minimize the largest sum among these m subarrays.

function splitArrayTS(nums: number[], m: number): number {
  let start: number = 0;
  let end: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    start = Math.max(start, nums[i]);
    end += nums[i];
  }
  //      binary search
  while (start < end) {
    let middle: number = Math.floor(start + (end - start) / 2);

    let sum: number = 0;
    let pieces: number = 1;
    for (let num of nums) {
      if (sum + num > middle) {
        sum = num;
        pieces++;
      } else {
        sum += num;
      }
    }

    if (pieces > m) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
