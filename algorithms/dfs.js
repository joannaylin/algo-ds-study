// Depth First Search & various traversal methods
// recursively and iteratively

// Preorder
// root node, left child, right child

// Recursively
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var data = [];

  function traverse(node) {
    data.push(node);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return data;
};

// Iteratively (Uses a stack!)
// lc version
var preorderTraversal = function (root) {
  let results = [];
  // maintain a stack of nodes to visit as we traverse down the tree
  let stack = [];

  if (root === null) return results;
  stack.push(root);

  while (stack.length !== 0) {
    const node = stack.pop();

    results.push(node.val);
    if (node.right !== null) stack.push(node.right);
    // we push right first, and then left in order to have left at the 'top' of the stack (LIFO)
    if (node.left !== null) stack.push(node.left);
  }

  return results;
};

// InOrder
// left child, root node, right child

// Recursively
var inorderTraversal = function (root) {
  var data = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return data;
};

// Iteratively (uses a stack!)
var inorderTraversal = function (root) {
  const output = [];

  if (root === null) {
    return output;
  }

  const stack = [];
  let curr = root;

  while (curr !== null || stack.length !== 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      output.push(curr.val);
      curr = curr.right;
    }
  }

  return output;
};

// PostOrder
// right child, left child, root node

// Recursively
var dfsPostOrder = function (root) {
  var data = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node);
  }
  traverse(root);
  return data;
};

// Iteratively (uses a stack!)
var postorderTraversal = function (root) {
  const output = [];

  if (root === null) {
    return output;
  }

  const stack = [root];
  let prev = null;

  while (stack.length !== 0) {
    const curr = stack[stack.length - 1];

    if (prev === null || prev.left === curr || prev.right === curr) {
      // go down the tree
      if (curr.left !== null) {
        stack.push(curr.left);
      } else if (curr.right !== null) {
        stack.push(curr.right);
      } else {
        // when current node is a leaf
        stack.pop();
        output.push(curr.val);
      }
    } else if (curr.left === prev) {
      // go up the tree from the left node
      if (curr.right !== null) {
        stack.push(curr.right);
      } else {
        stack.pop();
        output.push(curr.val);
      }
    } else if (curr.right === prev) {
      stack.pop();
      output.push(curr.val);
    }
    prev = curr;
  }

  return output;
};
