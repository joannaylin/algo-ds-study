/* 
Quick Sort
- exploits arrays of length 0 or 1 (these are sorted)
- selects an element (pivot) and finds the index where the pivot should end up in the sorted array
  - element is sorted, but not the rest of the array
- given an array, function should designate an element as the pivot, rearrange elements in the array so that all values less than pivot are moved to the left and all values greater than the pivot are moved to the right of the pivot
- order of elements on either side of pivot don't matter
- helper function will do this in place and not create a new array
- helper will return index of the pivot
- picking a pivot is important and has consequences for which one you pick

Big O (Time)
* where N is the number of items in the array
- best case: O(N*log(N))
- average case: O(N*log(N))
- worst: O(N^2)

Big O (Space)
- O(N*log(N))
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]; // first value in array
  let swapIdx = start; // index of first value in array (0)

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      // if first value > value next to it, increment swapIdx, counter of how many elements are to the left of arr[start]
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  // swap the pivot from the start with the swapIdx
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

// another version

var items = [5, 3, 7, 6, 2, 9];

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]]; //swapping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      // sort elements on the left side of the pivot
      // right becomes the returned index - 1
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      // sort elements on the right side of the pivot
      // left index becomes the returned index
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
