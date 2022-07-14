// 744. Find Smallest Letter Greater Than Target

/*
Q. Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (target < letters[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return letters[start % letters.length];
};
