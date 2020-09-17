// Dynamic Programming

/*
What is it? 
- method for solving complex problems by breaking it down into a collection of simpler subproblems
- solve the subproblems just once and store solutions
- use past knowledge to make solving a future problem easier

When to use it? 
- works best on problems with optimal substructure and overlapping subproblems

Overlapping Subproblems: 
- can break problem down into smaller pieces
- the smaller pieces can be reused again
- think Fibonacci sequence!!
- recursion uses the same notion of subproblems 
  - but they don't necessarily overlap!
  - another example: merge sort (subproblems without overlap)
- overlap means that the same subproblem is REPEATED -> overlapping 

Optimal substructure:
- an optimal solution for the bigger problem can be found by using the optimal solution for the subproblems

*/

/* 

Beginner Lite Example 
Fibonacci Sequence -
(using recursion)

function fib(n) {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

Big O (Time)
O(2 ^ n)

*/

/*
Enter Memoization (Top Down)
- storing results of expensive function calls and returning the cached result when the same inputs occur again

function fib(n, memo=[]) {
  // check if value is in the memo array, if so return i
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1;
  // set variable to hold the result of fib
  var res = fib(n-1, memo) + fib(n-2, memo)
  // set value in array
  memo[n] = res
  return res
}

Big O (Time)
O(N)

*/

/*
Enter Tabulation (Bottom Up)
- usually done using iteration
- better space complexity 
- storing result of a previous result in a table (usually array)
- recursive version can exceed call stack, tabulation won't

function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0,1,1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n]
}

*/