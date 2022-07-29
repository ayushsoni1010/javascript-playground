// 7. Reverse Integer

// Q. Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */

const reverse = function (x) {
  let remainder = parseFloat(x.toString().split("").reverse().join(""));
  return remainder >= 2147483647 || remainder <= -2147483648
    ? 0
    : remainder * Math.sign(x);
};
