// LeetCode 498: Diagonal Traverse (Medium)

/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// this method is tricky because it is traversing the 2d matrix (L to R, T to B), NOT traversing it diagonally
// as we go left to right, top to bottom, elements are added to the resultant array based off of variable to indicate if arrow is moving up or down
  // if arrow is moving down, current element is added to end of array (elements at top of 2d array are diagonally BEFORE current element) -> look at 2 and 4
  // if arrow is moving up, current element is added to the beginning of the array (elements at top of 2d are diagonally AFTER current element) -> look at 5,3,7

var findDiagonalOrder = function(matrix) {
  const rows = matrix.length;
  // check if rows are 0, because columns are dependent
  if (rows === 0) return [];
  const columns = matrix[0].length;
  // number of diagonal traverses = rows + columns - 1
  // create an array of arrays
    // each traverse gets an array
  let diagonals = new Array(rows + columns - 1).fill(0).map(_ => [])
  
  // double for loop to access 2d array 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // key is indicator of moving up or moving down
      // moving up when sum is even, moving down when sum is odd (see breakdown below function)
      const key = i + j
      const num = matrix[i][j]
      
      if (key % 2 === 0) {
        // moving up -> means that elements are added to the beginning of array (elements at bottom are diagonally before elements at top)
        diagonals[key].unshift(num)
      } else {
        // moving down -> means that elements are added to the end of array (elements at bottom are diagonally after elements at top)
        diagonals[key].push(num)
      }
    }
  }
  // result -> remember diagonals is an array of arrays, which each array indicating a diagonal traverse
  return diagonals.flat()
};

// (0,0) -> sum is 0
// (0,1), (1,0) -> sum is 1
// (2,0), (1,1), (0,2) -> sum is 2
// (1,2), (2,1) -> sum is 3
// (2,2) -> sum is 4