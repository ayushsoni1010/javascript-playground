// 633. Sum of Square Numbers
// https://leetcode.com/problems/sum-of-square-numbers/

/** 
 
Q. Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.
 
**/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    let result = a * a + b * b;
    if (result === c) {
      return true;
    }
    if (result > c) {
      b--;
    } else {
      a++;
    }
  }
  return false;
};
