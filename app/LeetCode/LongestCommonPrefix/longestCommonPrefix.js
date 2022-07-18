// 14. Longest Common Prefix

/*
Q. Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

const longestCommonPrefix = (strs) => {
  const emptyIndex = strs.findIndex((item) => item === "");
  if (strs.length === 0 || emptyIndex !== -1) {
    return "";
  }
  let commonFirstChar = "";
  for (let i = 0; i < strs.length; i++) {
    let firstChar = strs[i].substring(0, 1);
    if (commonFirstChar === "") {
      commonFirstChar = firstChar;
    } else {
      if (firstChar !== commonFirstChar) {
        return "";
      }
    }
  }
  const newStrs = strs.map((item) => item.substring(1));
  return commonFirstChar + longestCommonPrefix(newStrs);
};
