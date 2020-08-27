/*
Selection Sort
- repeatedly pick the smallest element to append to the result
  - find smallest element, and put into first position
  - find next smallest element and put into second position
  - repeat
- better than bubble sort in the sense that it only swaps at the end of the loop vs always swapping
- doesn't care if nearly sorted, so generally much slower

Big O (Time)
* where N is the number of elements in the array
- best case: O(N^2)
- average and worst case: O(N^2)

Big O (Space)
- O(1)

- quadratic sorting algorithm family (bubble, insertion, selection)
*/

// LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        // make j = i+1 because compare next number after i (not same number)
        for(var j = i+1; j < arr.length; j++){
            // if you find a change, set it equal to the lowest
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        // check that it's not already the lowest (no repeats)
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
