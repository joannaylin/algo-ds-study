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

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    // add to end of the values array
    // check parent to see if need to bubbleUp
    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length -1
        let elem = this.values[idx]
        
        while (idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if (elem <= parent) break;
            this.values[parentIdx] = elem;
            this.values[idx] = parent;
            idx = parentIdx
        }

    }

    // remove the root 
    // replace with the most recently added
    // adjust (sink down)
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max;
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
                if (leftChild > elem) {
                    swap = leftChildIdx;
                }
            }

            // checks leftChild value to confirm swap rightChild 
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (swap === null && rightChild > elem || 
                swap !== null && rightChild > leftChild) {
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

// [41, 39, 33, 18, 27, 12]
//   0,  1,  2,  3,  4,  5

var heap = new MaxBinaryHeap();
heap.insert(55);
// heap.insert(12);
// heap.insert(41);
// heap.insert(39);
// heap.insert(18);
// heap.insert(27);
// heap.insert(33);
