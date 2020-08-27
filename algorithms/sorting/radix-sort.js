/*
Radix Sort
- all other algos have been comparison sorts -> compare 2 things at a time
  - best you can do with comparison sorts is Nlog(N)
- radix sort is a special sorting algo that works on lists of numbers
- never makes comparisons between elements
- exploits the fact that information about the size of a number is encoded in the number of digits

Big O (Time)
* where N is the number of elements in the array, and K is the number of digits
- O(N*K)

Big O (Space)
- O(N+K)
*/

// radix sort pseudocode

// define a function that accepts a list of numbers
// figure out how many digits the largest number has
// loop from k=0 up to this largest number of digits
    // create buckets for each digit (0,9)
    // place each number in the corresponding bucket based on its kth digit
// replace our existing array with values in our buckets, starting with 0 and up to 9
// return list at the end


// getDigit(num, place) -> returns digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount(num) -> returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits(nums) -> given an array, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  // find the max number of loops you're going to have to do (num of digits of biggest num)
  let maxDigitCount = mostDigits(nums)
  // loop through array 
  for (let k = 0; k < maxDigitCount; k++) {
      // create your 10 empty buckets
      let digitBuckets = Array.from({length: 10}, () => [])
      // loop through the nums array and grab the digit at the index given 
      for (let i = 0; i < nums.length; i++) {
          // sort into the 10 buckets
          let digit = getDigit(nums[i], k)
          digitBuckets[digit].push(nums[i])
      }
      // create new array from all buckets 
      nums = [].concat(...digitBuckets)
  }
  return nums;
}

radixSort([23,345,5467,12,2345,9852])








