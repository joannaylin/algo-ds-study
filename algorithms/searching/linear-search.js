/* 
Linear Search
- check every single element in an array and check if it's the value we want
- JS has built in methods that do this: 
    - indexOf, includes, find, findIndex

Big O:
- best case: O(1) -> if element is the first one in the array
- average and worst case: O(N) where N is the number of elements in the array
*/

function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)