// interview cake

// Write a function to find the 2nd largest element in a binary search tree

/**
 * Big O (Time)
 * O(H) time where H is the height of the tree 
 * O(lgN) if tree is balanced, O(N) otherwise
 * 
 * Big O (Space)
 * O(1)
 */


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

// start off by finding the largest
// largest is the right mode node 

function findLargest(rootNode) {
  if (!rootNode) return undefined;
  let current = rootNode;

  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

/**
 * 
 * @param {*} rootNode 
 * find second largest
 * typically that would just be the parent of the largest node right?
 * but what if the furthest right node had a left subtree with values??
 * the second largest would actually be the largest of that left subtree!!
 * can still use the largest function.. 
 * 
 */

function secondLargest(rootNode) {
  // if there is no root node, and if there are not at least two nodes in the tree:
  if (!rootNode || (!rootNode.left && !rootNode.right)) return undefined;

  let current = rootNode;

  while (current) {
    // current is the largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (currentNode.left && !currentNode.right) {
      return findLargest(currentNode.left)
    }

    // current is the parent of largest and largest has no children;
    if (current.right && !current.right.right && !current.left) {
      return current.value;
    }
    current = current.right;
  }

}