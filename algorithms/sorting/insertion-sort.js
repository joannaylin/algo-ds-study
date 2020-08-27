/* 
Insertion Sort
- builds up the sort by gradually creating a larger left half which is always sorted
- maintains a sorted subarray and repetitively inserts new elements into it
    - take the first element as a sorted subarray
    - insert the second element into the sorted subarray (shift elements if needed)
    - insert the third element into the sorted subarray
    - repeat
- good for when data is nearly sorted
- good for when data is continuously added, maintain a running sort

Big O (Time)
* where N is the number of elements in the array
- best case: O(N)
- average and worst case: O(N^2)

Big O (Space)
- O(1)

- quadratic sorting algorithm family (bubble, insertion, selection)
*/

// insertion sort pseudocode

// start by picking the second element in the array
// compare second element with the one before it and swap if necessary
// continue to next element and if it is in the incorrect order,
// iterate through the sorted portion (left side) to place the element in correct place
// repeat until the array is sorted

function insertionSort(arr){
	let currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        // including the && arr[j] > currentVal ensures that you only go into this loop
        // when the number before is greater than currentVal
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // arr[j] is > currentVal 
            // so move arr[j] to arr[j+1] (the next index/forward)
            arr[j+1] = arr[j]
        }
        // note** j moves down one when you are out of the for loop!!!
        // after you move arr[j] forward, set what was arr[j], now arr[j+1] because out of the for loop, to currentVal
        arr[j+1] = currentVal
    }
    return arr;
}

insertionSort([2,1,9,76,4])