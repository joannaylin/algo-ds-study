// LeetCode 14: Longest Common Prefix (Easy)

/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ""
  
  if (strs.length === 0) return prefix
  
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return prefix   
    }
    prefix += strs[0][i]
  }
  
  return prefix
};