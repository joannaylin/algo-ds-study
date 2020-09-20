// LeetCode 716: Max Stack (Easy)

/**
 * Design a max stack that supports push, pop, top, peekMax and popMax.
 * push(x) -- Push element x onto stack.
 * pop() -- Remove the element on top of the stack and return it.
 * top() -- Get the element on the top.
 * peekMax() -- Retrieve the maximum element in the stack.
 * popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.
 *
 * Example 1:
 * MaxStack stack = new MaxStack();
 * stack.push(5);
 * stack.push(1);
 * stack.push(5);
 * stack.top(); -> 5
 * stack.popMax(); -> 5
 * stack.top(); -> 1
 * stack.peekMax(); -> 5
 * stack.pop(); -> 1
 * stack.top(); -> 5
 *
 */

/**
 * initialize your data structure here.
 */
var MaxStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    const last = this.stack.pop();
    return last;
  }
  return null;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
  return null;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  if (this.stack.length > 0) {
    return Math.max(...this.stack);
  }
  return null;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  if (this.stack.length > 0) {
    let max = this.peekMax();
    let maxIdx = this.stack.lastIndexOf(max);
    return this.stack.splice(maxIdx, 1);
  }
  return null;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
