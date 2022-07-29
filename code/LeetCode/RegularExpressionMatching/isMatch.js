// 10. Regular Expression Matching

/*
Q. Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// ^ => means start of string
// $ => means end of string

var isMatch = function (s, p) {
  let pattern = new RegExp("^" + p + "$");
  return pattern.test(s);
};
