// 1812. Determine Color of a Chessboard Square
// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

/**

 Q. 
 You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

 Return true if the square is white, and false if the square is black.

 The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

**/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const letters = {
    a: 1,
    b: 2,
    c: 1,
    d: 2,
    e: 1,
    f: 2,
    g: 1,
    h: 2,
  };

  if (
    (letters[coordinates[0]] % 2 !== 0 && coordinates[1] % 2 === 0) ||
    (letters[coordinates[0]] % 2 === 0 && coordinates[1] % 2 !== 0)
  )
    return true;
  else return false;
};
