/* 
Bubble Sort
- sorting algo where largest values bubble to the top
- repeatedly compare neighbor pairs and swap if necessary
  - scan array, swap adjacent pair of elements if they are not in relative order
    - bubbles up the largest element to the end
  - scan array again, bubbling up the second element
  - repeat

Big O (Time)
* where N is the number of items in the array
- best case: O(N) 
- average and worst case: O(N^2)

Big O (Space)
- O(1)

- quadratic sorting algorithm family (bubble, insertion, selection)
*/

// Not Optimized
function bubbleSort(arr) {
  for (var i=0; i<arr.length; i++) {
      for (var j=0; j<arr.length; j++ ) {
          if (arr[j] > arr[j+1]) {                
             // SWAP
             var temp = arr[j]
             arr[j] = arr[j+1]
             arr[j+1] = temp
             // ES6 WAY
             // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          }
       }
    }
    return arr;
}

// bubbleSort([37, 45, 29, 8])
// i=0 --> arr[i] = 37 
// j=0 --> arr[j] = 37
//     --> arr[j+1] = 45
// arr[j] not larger than arr[j+1], so don't enter the if statement
// j=1 --> arr[j] = 45
//     --> arr[j+1] = 29
// arr[j] larger than arr[j+1], so enters if statement and does the swap

// Optimized BubbleSort
// avoid unnecessary comparisons by starting from the right (end)
// nested loop can start at 0, but will stop 1 less than j
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
