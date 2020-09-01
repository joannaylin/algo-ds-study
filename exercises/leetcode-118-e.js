// LeetCode 118: Pascal's Triangle (Easy)

/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle. 
*/

var generate = function(numRows) {
  let pascal = new Array(numRows);

  for(let i = 0; i < numRows; i++) {
    let arr = new Array(i+1);
    arr[0] = 1;
    arr[arr.length-1] = 1;

    // create the row 
    for(let j = 1; j < arr.length - 1; j++){
      arr[j] = pascal[i-1][j] + pascal[i-1][j-1];
    }
    pascal[i] = arr;
  }
  return pascal;
};