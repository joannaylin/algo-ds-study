// LeetCode 54: Spiral Matrix (Medium)

/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let results = [];
  
  if (matrix.length === 0) return [];
  
  // keep track of what row and column we're on
  let startRow = 0;
  let endRow = matrix.length-1;
  let startCol = 0;
  let endCol = matrix[0].length-1;
  
  // only want to loop for unvisited columns and unvisited rows
  while (startCol <= endCol && startRow <= endRow) {
    // go across top 
    // row stays constant, column increments
    for (let i = startCol; i <= endCol; i++) {
      results.push(matrix[startRow][i])
    }
    startRow++;
    
    // go down right 
    // row increments, column stays constant
    for (let i = startRow; i <= endRow; i++) {
      results.push(matrix[i][endCol])
    }
    endCol--;
    
    // check if start row is less than or equal to end row
    // if false, then all rows have been visited 
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        results.push(matrix[endRow][i])
      }
      endRow--;
    }
    
    // check if start col is less than or equal to end col
    // if false, then all cols have been visited 
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        results.push(matrix[i][startCol])
      }
      startCol++;
    }
    
  }
  
  return results
};

// start off at first element and continue to end of row
// then proceed down all rows of that column to end of column
// go all the way to the beginning of the row (reverse)
// go up to the second row (1 less than the beginning)
// repeat 

// start off by keeping track of the max (length of the row, or number of rows (length of the column))
// rows = 3, cols = 3
// go across first row -> minus 1 from number of rows (rows = 2)
// going down on right side -> minus 1 from number of cols (cols = 2)
// going across bottom row -> minus 1 from number of rows (rows = 1)
// go up left side -> minus 1 from number of cols (rows = 0, cols = 1)
// go right (rows = 0, cols = 0)