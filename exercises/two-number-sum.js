// TWO-NUMBER-SUM

array = [3,5,-4,8,11,1,-1,6]

targetSum = 10

// output = [11, -1]

// if any two numbers in the array sum add to the targetSum, return them in an array in any order
// if no numbers sum to the targetSum, return an empty array
// the array is never empty
// no repeat numbers are in the array
// the sum must include two different numbers, not the same number added to itself

// works but has O(n**2)
function twoNumSum(array, wantedSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === wantedSum) {
        console.log([array[i], array[j]])
      }
    }
  }
  console.log([])
}

// other methods: 

function twoNumSum(array, wantedSum) {
  const nums = {};
  for (const num of array) {
    const match = wantedSum - num;
    if (match in nums) {
      return [match, num]
    } else {
      nums[num] = false;
    }
  }
  return [];
}


function twoNumSum(array, wantedSum) {
  array.sort((a,b) => a-b)
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === wantedSum) {
      return [array[left], array[right]]
    } else if (currentSum < targetSum) {
      left--;
    } else if (currentSum > targetSum) {
      right--
    }
  }
  return []
}





twoNumSum(array, targetSum)