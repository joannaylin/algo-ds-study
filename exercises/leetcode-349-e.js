// LeetCode 349: Intersection of Two Arrays (Easy)

// Given two arrays, write a function to compute their intersection.

/**
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let n1 = new Map();
  let results = new Set();

  for (let i = 0; i < nums1.length; i++) {
    n1.has(nums1[i])
      ? n1.set(nums1[i], n1.get(nums1[i]) + 1)
      : n1.set(nums1[i], 1);
  }
  for (let j = 0; j < nums2.length; j++) {
    if (n1.has(nums2[j])) {
      results.add(nums2[j]);
    }
  }
  return [...results];
};

// more succinct version 
var intersection = function (nums1, nums2) {
  let set = new Set(nums1);
  return [...new Set(nums2.filter((num) => set.has(num)))];
};
