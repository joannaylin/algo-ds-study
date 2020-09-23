// interview cake

// Write a function to check that a binary tree is a binary search tree

// sample binary tree node class:
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {
  if (!treeRoot) return false;

  const stack = [];
  stack.push({ node: treeRoot, lowerBound: -Infinity, upperBound: +Infinity });

  // dfs traversal 
  while (stack.length !== 0) {
    const { node, lowerBound, upperBound } = stack.pop();

    // invalid node
    if (node.value <= lowerBound && node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      stack.push({ node: node.left, lowerBound, upperBound: node.value });
    }

    if (node.right) {
      stack.push({ node: node.right, lowerBound: node.value, upperBound });
    }

  }

  return true;
}
