/*
  Args:
    matrix: an NxN array of arrays containing the matrix to check
  Returns:
    The string "VALID" if matrix contains a valid sub-sudoku solution, and
    "INVALID" otherwise
*/

/*
- number of 'sets' to check is N + N -> every row + every col
- every number shows up N times
- check all rows first 
- use counter (or obj?) to match each element to show N amount of times
- transpose matrix and then check all rows again (these were cols before)/ check cols 
- reset counter and use counter again to match each element to show N amount of times
*/

function checkSubSudoku(matrix) {
  if (!matrix || matrix.length === 0) return "INVALID"
  let N = matrix[0].length;
  let counterObjRows = {};
  let counterObjCols = {};
  let validNums = []
  
  // add valid nums to array (1...N)
  for (let i = 1; i <= N; i++) {
    validNums.push(i)
  }
  
  // check rows
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let num = parseInt(matrix[i][j])
      if (validNums.includes(num)) {
        counterObjRows[num] ? counterObjRows[num]++ : counterObjRows[num] = 1 
      } else {
        return "INVALID"
      }   
    }
    let rowCount = Object.values(counterObjRows)
    if (!rowCount.every(num => num === i + 1)) return "INVALID"
  }
  
  // check cols
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      let num = parseInt(matrix[i][j])
      if (validNums.includes(num)) {
        counterObjCols[num] ? counterObjCols[num]++ : counterObjCols[num] = 1;
      } else {
        return "INVALID"
      }
    }
    let colCount = Object.values(counterObjCols)
    if (!colCount.every(num => num === j + 1)) return "INVALID"
  }
  
  // check that the number of times every element shows is equal to N 
  // every number must show up N times to be a potential valid matrix
  let numPresentNTimesRows = Object.values(counterObjRows).every(val => val === N)
  let numPresentNTimesCols = Object.values(counterObjCols).every(val => val === N)
  
  if (numPresentNTimesRows && numPresentNTimesCols) {
    return "VALID"
  }

  return "INVALID";
}

// (p)