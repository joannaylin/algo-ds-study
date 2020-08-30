// LeetCode 735: Asteroid Collision (Medium)

/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function(asteroids) {
  let stack = [];
  
  for (let i = 0;i < asteroids.length; i++) {
      // use as indicator to add to the stack
      let add = true; 

      // asteroid collision: occurs when current val is negative, and the last item in stack is positive 
      if (asteroids[i] < 0 && stack[stack.length-1] > 0) {
          // need while loop because can keep comparing to end of stack and removing items if more collisions are possible
          // think of [10,2,-5] -> becomes [10]
          while (stack.length != 0 && stack[stack.length-1] > 0) {
              let current = Math.abs(asteroids[i]);
              let previous = stack[stack.length-1];

              // if last item in stack is same value as current
              // remember sign difference is accounted for in above if statement
              // remove previous from stack and do not add current value to stack
              if (current == previous) {
                  stack.pop();
                  add = false;
              }
              
              // if current > previous, then remove previous and add current to stack
              // if current < previous, don't add current to stack
              if (current > previous) {
                  stack.pop()
              } else {
                  add = false;
              }
              
              // hop out of while loop if add is false 
              if (!add) break;
          }
      }
      if (add) stack.push(asteroids[i]);
  }
  return stack;
};


// compare prev to current and if prev is +, and current is -, remove the smallest one (after taking abs val)
// [10,2,-5] -> result is [10]

// first attempt..
// instead of starting at beginning, go from back (can consecutively do this - as needed above)
    // if (asteroids[i] < 0 && asteroids[i-1] > 0) {
    //     if (asteroids[i] + asteroids[i-1] === 0) {
    //         asteroids.splice(i-1, 2)
    //     } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i-1])) {
    //         asteroids.splice(i, 1)
    //     } else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i-1])) {
    //         asteroids.splice(i-1, 1)
    //     }
    // }