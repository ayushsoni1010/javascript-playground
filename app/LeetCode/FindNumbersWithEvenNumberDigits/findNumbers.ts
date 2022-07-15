// 1295. Find Numbers with Even Number of Digits

//  Q. Given an array nums of integers, return how many of them contain an even number of digits.

function findNumbersTS(nums: number[]): number {
  let count: number = 0;
  nums.map((ele) => {
    if (Math.abs(ele).toString().length % 2 === 0) {
      count++;
    }
  });
  return count;
}
