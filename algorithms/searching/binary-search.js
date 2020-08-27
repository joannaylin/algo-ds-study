/* 
Binary Search
- much faster than linear search
- eliminates half of the remaining elements at a time
- only works on sorted arrays!

Big O:
- best case: O(1)
- worst and average case: O(logN) (base 2)
*/

// Original Solution
function binarySearch(arr, elem) {
  // set pointers here. Math.floor for middle so that no decimals are allowed..
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  // while (haven't found elem yet)
  // start <= end is so that if the number is not present in the array, it
  // doesn't go into an infinite loop and never stop!!
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      // if the value we are searching for is less than the middle pointer aka, smaller
      // then we need to bring in the end pointer to one less than middle pointer
      // 1 less than middle pointer because we already know middle doesn't work (redundant)
      end = middle - 1;
    } else {
      // if value is greater than the middle pointer,
      // move start pointer up
      start = middle + 1;
    }
    // both instances require a change in the middle pointer once start or end has moved
    middle = Math.floor((start + end) / 2);
  }
  // above while only happens if the middle pointer isn't the value (& start <=end)
  // otherwise it pops out and moves here on down

  // this takes care of when you find the value!
  if (arr[middle] === elem) {
    return middle;
  }
  // this takes care of the value not present in array
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);
