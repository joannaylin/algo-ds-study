/*
Doubly Linked List
- linear data structure that contains a head, tail, and length property
- consists of nodes and each node has a value and a pointer to next node and previous node 
- both directions, no index
- better than SLL for finding nodes and can be done in half the time, but take up more memory

Big O (Time) 
* worst case
- access: O(N)
- search: O(N)
- insertion: O(1)
- deletion: O(1)

Big O (Space)
- O(N)

*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        var oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null; 
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;   
            oldTail.prev = null;      
        }
        this.length--; 
        return oldTail;
    }

    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        var count, current;
        if (idx <= Math.floor(this.length/2)) {
            count = 0;
            current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }
        return current;  
    }

    set(idx, val) {
        const foundNode = this.get(idx);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val)
 
        const newNode = new Node(val);
        const beforeNode = this.get(idx-1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        newNode.prev = beforeNode;

        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();

        const removedNode = this.get(idx);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removeNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}


var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push("LAST ITEM");