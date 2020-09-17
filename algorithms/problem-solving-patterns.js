// Problem Solving Patterns

/*
Frequency Counters
- uses objects or sets to collect values/frequencies of values
- avoids the need for nested loops or O(N^2) operations with arrays and strings
- usually O(N)
*/

// write a function called same, that accepts two arrays
// function should return true if every value in the array has its corresponding value squared in the second array

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {}
  let obj2 = {}

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] ? obj1[arr1[i]]++ : obj1[arr1[i]]
  }

  for (let j = 0; j < arr2.length; j++) {
    obj2[arr2[j]] ? obj2[arr2[j]]++ : obj2[arr2[j]]
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

same([1,2,3,2], [9,1,4,4])


/*
Sliding Window
- creating a window which can be an array or number from one position to another
- depending on conditions, the window either increases or closes (and a new window is created)
- useful for keeping track of a subset of data in an array/string etc.

*/

// write a function called maxSubarraySum
// accepts an array of integers and a number n
// function should calculate the max sum of n consecutive elements in the array

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let max = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i]
  }
  tempSum = max;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i-n] + arr[i]
    max = Math.max(max, tempSum)
  }
  
  return max
}


// O(N)
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17


