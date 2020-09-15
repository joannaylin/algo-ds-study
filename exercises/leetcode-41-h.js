// LeetCode 41: First Missing Positive (Hard)

/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let uniqueNums = new Set(nums)
  
  for (let i = 1;; i++) {
    if (!uniqueNums.has(i)) {
      return i
    }
  }
};

// Big O:
// O(N) space
// O(N) time