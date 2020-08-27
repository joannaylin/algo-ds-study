/*
Pure Recursion
- function itself is self contained
- no external data structure
- no nested function (helper)
- methods like slice, spread operator and concat make copies of arrays (don't mutate)
- strings are immutable!
    - so use slice, substr, or substring to make copies of strings
- make copies of objects using Object.assign or spread operator
*/

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
                                                                
                                                                             
                            
            