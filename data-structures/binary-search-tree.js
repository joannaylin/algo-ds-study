/* 
Tree
- trees are a type of graph
- non-linear data structure that contains a root and child nodes
- leaf node: node with no children
- binary trees can have at most 2 child nodes
- full binary tree: every node has 0 or 2 children
- complete binary tree: all levels are completely filled except maybe for last level and last level has all nodes to the left as possible
- perfect binary tree: all internal nodes have 2 children, and all leaf nodes at same level (full and complete)
- balanced binary tree: height of tree is O(logN) where N is number of nodes
- binary search trees are sorted, such that left is less than parent, and right is greater than parent
    - easier to look things up because sorted
    - search is quick

Examples
- HTML DOM, network routing, abstract syntax tree, artificial technology, folders in OS, JSON

Big O (Time)
* worst case
- access: O(N)
- search: O(N) (at best is logN) - (base 2) when you double nodes, you increase number of steps to insert/find by 1
- insertion: O(N) (at best is logN)
- deletion: O(N)

Big O (Space)
- O(N)

*/


/*
Tree Traversal
- how to access each node in the tree just once
- Big O time for both are the same (traverse each node once)
- Big O space depends: 
    - wide tree -> breadth = more space
    - deep, long tree -> depth = more space

- Breadth First Search
    - go through tree by levels
    - complete level before continuing onto next level
- Depth First Search
    - go on route, top to bottom, and then move left to right
    - easier to do recursively
    - preorder, postorder and inorder methods
        - preorder: root, left, right
            - helpful for when you want to reconstruct or copy a tree
        - postorder: left, right, root
            - used to delete tree 
        - inorder: left, root, right 
            - in case of BST (gives nodes in non-decreasing order)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
       var newNode = new Node(val)
       if (this.root === null) {
           this.root = newNode
           return this;
       } else {
           var current = this.root
           while (true) {
               if (val === current.val) return undefined;
               if (val < current.val) {
                   if (current.left === null) {
                       current.left = newNode;
                       return this;
                   } else {
                       current = current.left
                   }
               } else {
                   if (current.right === null) {
                       current.right = newNode;
                       return this;
                   } else {
                       current = current.right;
                   }
                 }  
               }
       }
       return this;
    }

    find(val) {
        if (this.root === null) return false;
        if (this.root.val === val) return true;
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }

    // output should be: [10, 6, 15, 3, 8, 20]
    bfs() {
        var data = []
        var queue = []

        var node = this.root;
        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            data.push(node)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }

    // output should be: [10, 6, 3, 8, 15, 20]
    dfsPreOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    // output should be [3, 8, 6, 20, 15, 10]
    dfsPostOrder() {
        var data = [];
        var current = this.root

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node);
        }
        traverse(current)
        return data;
    }

    // output should be: [3, 6, 8, 10, 15, 20]
    dfsInOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}


//          10
//      6       15
//    3  8         20
// [10, 6, 15, 3, 8, 20]

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6)
tree.insert(15);
tree.insert(3);
tree.insert(20);
tree.insert(8);