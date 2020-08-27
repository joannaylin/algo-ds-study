/*
Binary Heap
- similar to BST, but different rules
- type of tree
- as compact as possible
    - all children of each node are as full as they can be 
    - left children are filled out first
    - every left and right is filled before going down
- no implied ordering between sibling nodes
- max binary heap: parent nodes always larger than child nodes
- min binary heap: parent nodes always smaller than child nodes
- binary heaps are often used to implement priority queues 
- used with graph traversal algos
- an easy way of storing a binary heap: a list or an array

Big O
- insertion: O(logN)
- removal: O(logN)
- search: O(N)

- parent accessing their children: 2n + 1 (left child), 2n + 2 (right child)
- child accessing parent: Math.floor((n-1)/2)
*/

// min binary heap 
// priority queue

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
}

// using min binary heap
// lower number means higher priority
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length-1;
        let elem = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx]

            if (elem.priority >= parent.priority) break;

            this.values[parentIdx] = elem;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        let elem = this.values[0]

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < elem.priority) {
                    swap = leftChildIdx;
                }
            }

            // checks leftChild value to confirm swap rightChild 
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (swap === null && rightChild.priority < elem.priority || 
                swap !== null && rightChild.priority < leftChild.priority) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap]
            this.values[swap] = elem
            idx = swap;
        }
    }
}