/* 
Merge Sort
- combines merging and sorting
- exploits arrays of length 0 or 1 -> these are already sorted!!
- easier to merge sorted arrays vs unsorted arrays
- begin by breaking down the array into 1 element arrays
- combine pairs of arrays and sort them
- keep doing this until all sorted
- bulk of logic in the merge function!!

Big O (Time)
* where N is the number of items in the array
- best case: O(N*log(N))
- average and worst case: O(N*log(N)) 

Big O (Space)
- O(N)
*/

// Merge function
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Merge Sort (Recursive)
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    // breaking down into halves until arrays are empty or have 1 element
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    // merge these arrays
    return merge(left, right);
}

mergeSort([10,24,76,73])
