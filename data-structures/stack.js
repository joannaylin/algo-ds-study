/*
Stack
- Last In, First Out Principle (LIFO)
- core actions are adding and removing from end of list (push and pop)
- most recent added item can be removed
- think of a stack of pancakes!
- can be implemented using linked list or array (LL more efficient)
    - LL not indexed (easier to remove from front)
    - array is indexed (easier to remove from end) -> arrays need to reindex if removed from beginning (costly!)

Implementation Cases
- backtracking features: undo feature, or to previous choice point in game
- recursive algorithms: push temp data onto a stack and pop data as we back track through algo

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

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (this.size === 0) return undefined;

        const removeNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removeNode.next;
            removeNode.next = null;            
        }
        this.size--;
        return removeNode.val;
    }

}

var stack = new Stack();
stack.push(10)
stack.push(5)
stack.push(0)