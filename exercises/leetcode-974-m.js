// LeetCode: Subarray Sums Divisible by K (Medium)

// Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

/**
 * Example 1:
 * Input: A = [4,5,0,-2,-3,1], K = 5
 * Output: 7
 * Explanation: There are 7 subarrays with a sum divisible by K = 5: 
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 * 
 * Note:
 * 1 <= A.length <= 30000
 * -10000 <= A[i] <= 10000
 * 2 <= K <= 10000
 */

 /**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let freq = new Array(K).fill(0) // moduloK: times seen so far
  // accumulative sum of elements of A
  let sum = 0;
  // count of wanted subarrays, where sum % K = zero
  let count = 0;
  
  freq[0] = 1;
  
  for (let i = 0; i < A.length; i++) {
      sum += A[i]
      let remainder = sum % K
      
      if (remainder < 0) remainder = (remainder + K) % K
      
      count += freq[remainder]
      freq[remainder]++;
  }
  
  return count;
};


// https://leetcode.com/problems/subarray-sums-divisible-by-k/discuss/413234/DETAILED-WHITEBOARD!-BEATS-100-(Do-you-really-want-to-understand-It)
