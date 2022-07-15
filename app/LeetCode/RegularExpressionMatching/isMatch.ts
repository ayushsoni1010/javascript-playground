// 10. Regular Expression Matching

/*
Q. Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

*/

function isMatchTS(s: string, p: string): boolean {
  let pattern: any = new RegExp("^" + p + "$");
  return pattern.test(s);
}
