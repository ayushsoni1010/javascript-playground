// 7. Reverse Integer

// Q. Given an integer x, return true if x is palindrome integer.

function isPalindromeNumber(x: number): boolean {
  let temp: number = x;
  let sum: number = 0;

  if (Math.sign(x) === -1) {
    return false;
  }
  while (x != 0) {
    let rem: number = x % 10;
    sum = sum * 10 + rem;
    x = Math.floor(x / 10);
  }
  return temp === sum;
}
