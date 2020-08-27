/*
Queue
- First In, First Out Principle (FIFO)
- items are removed from the list in exactly the same order in which they were added to it
- think of an action line -> DMV, movie line
- core actions are adding an item to the end, and removing it from the beginning
- can be implemented using linked list or array (LL more efficient)

Implementation Cases
- first come, first serve: queueing system for requests
- breadth first search: queue can store nodes that are going to be processed
- cache: LRU cache implementation is essentially a queue structure

Big O (Time) 
* worst case
- access: O(N)
- search: O(N)
- insertion: O(1)
- deletion: O(1)

Big O (Space)
- O(N)

*/

// linked list implementation

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to end
    enqueue(val) {
        var newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    // remove from beginning
    dequeue() {
        if (this.size === 0) return undefined;
        var removeNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removeNode.next;
        }
        removeNode.next = null;
        this.size--;
        return removeNode
    }

}

var queue = new Queue();
queue.enqueue("hello!")
queue.enqueue("2")
queue.enqueue("3")
