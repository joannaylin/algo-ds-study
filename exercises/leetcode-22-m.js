// LeetCode 22: Generate Parentheses (Medium)

/* 
given n pairs of parentheses, generate all combinations of well-formed parentheses
*/

/**
 * @param {number n} // number of pairs 
 * @return {number[]}
 */

// recursive solution
var generateParentheses = function(n) {
  let results = [];

  function parens(string, open, closed) {
      if (string.length === 2 * n) results.push(string)
      // if there are still open parens available, add an open to the string
      // decrement open (used one)
      // increment closed (now we can add a closed)
      if (open > 0) {
        parens(string + "(", open-1, closed+1)
      }

      // if there are closed parens to add, add to string
      // no change to open parens, 
      // decrement closed 
      if (closed > 0) {
        parens(string + ")", open, closed-1)
      }
  }
  
  // start off with n number of open parens (there is an equal amount of closed parens)
  // close parens starts as 0 because we want *well-formed* parens (can't have closed without open)
  parens("", n, 0)
  return results;
};

// example: 

n = 3;

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
