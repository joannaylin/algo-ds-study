// LeetCode 238: Product of Array Except Self (Medium)
/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 *
 * Example:
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
 * Note: Please solve it without division and in O(n).
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 
*input: [1,2,3,4]
*output: [24,12,8,6]

*example: to get the output[1], it would be output[0] * output[2] * output[3]
*output[2] * output[3] is essentially the product of the elements to the right of position 1
*output[0] is the product of the elements to the left of position 1

*have array that holds product of elements to the left of it
*product of element to the left of 1 is nothing, so we say 1 
*[1]
*product of elements to the left of 2 is 1 * 1 (previous)
*[1,1]
*product of elements to the left of 3 is 1 * 1 * 2 = 2
*[1,1,2]
*product of elements to the left of 4 is 1 * * 1 * 2 * 3 = 6
*left: [1,1,2,6]

*have array that holds product of elements to the right of it 
*product of elements to the right of 4 is nothing, so we say 1
*[,,,1]
*product of elements to the right of 3 is 1 * 4 = 4
*[,,4,1]
*product of elements to the right of 2 is 1 * 4 * 3 = 12
*[,12,4,1]
*product of elements to the right of 1 is 1 * 4 * 3 * 2 = 24
*right: [24,12,4,1]

*now we have arrays where each position's value is the product of the elements to the left or right of it (not including current)
*i.e. input array, input[2] = 3. left array, left[2] = 2, because elements 1 * 2 (left of 3) = 2

*multiply position of i of left array with position of i of right array to get the product of array except self!!
*i.e. input[2] = 3, output[2] should be 8. can find this by multiplying left[2] = 2 with right[2] = 4 = 8

*/

var productExceptSelf = function (nums) {
  let output = [];
  let leftMult = 1;
  let rightMult = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = leftMult;
    leftMult *= nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= rightMult;
    rightMult *= nums[j];
  }

  return output;
};

// Solving using division..
var productExceptSelf = function (nums) {
  let output = [];
  let product = nums.reduce((prod, val) => (prod *= val));
  for (let i = 0; i < nums.length; i++) {
    output.push(product / nums[i]);
  }
  return output;
};

var productExceptSelf = function (nums) {
  let product = nums.reduce((prod, val) => (prod *= val));
  return nums.map((num) => product / num);
};
