// 633. Sum of Square Numbers
// https://leetcode.com/problems/sum-of-square-numbers/

/** 
 
Q. Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.
 
**/

function judgeSquareSumTS(c: number): boolean {
  let a: number = 0;
  let b: number = Math.floor(Math.sqrt(c));

  while (a <= b) {
    let result: number = a * a + b * b;
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
}
