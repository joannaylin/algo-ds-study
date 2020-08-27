/*
Singly Linked List
- linear data structure that contains a head, tail, and length property
- consists of nodes and each node has a value and a pointer to next node or null
- only one direction, no index
- good for insertion and deletion
- basis of stacks and queues

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
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // pseudocode for push: add node to end
    // if no head property on list, set head and tail to be newly created node
    // otherwise, set next property on tail to be new node + tail to be new node
    // increment length by 1
    push(val) {
        // create new Node
        var newNode = new Node(val)
        // check edge case: if list is empty (aka no head or tail)
        if (!this.head) {
            // if there is no head, then set new node to the head
            // also set new node to tail 
            this.head = newNode
            this.tail = newNode
        } else {
            // if there is a head (aka, length of at least 1),
            // then set next property of tail to new node
            // note: this.tail is now the old tail that needs to point to the new tail
            this.tail.next = newNode 
            // set tail to new node
            // this.tail is now the new node
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    // pseudocode for pop: remove node at end
    // check if there are no nodes in the list (return undefined)
    // loop through the list until you reach the tail
    // set next property of the 2nd to last node to be null
    // set tail to be 2nd to last node
    // decrement length by 1
    // return value of node removed
    pop() {
        if (!this.head) return undefined;
        var current = this.head
        var newTail = current
        while (current.next) {
            newTail = current
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // shift pseudocode: remove node from beginning
    // if no nodes, return undefined
    // store current head property in a variable
    // set head property to be current head's next property
    // decrement length by 1
    // return value of node removed
    shift() {
        if (!this.head) return undefined
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--
        if (this.length===0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead
    }

    // unshift pseudocode: add node to beginning
    // create new node
    // if no head, then set head and tail equal to new node
    // set new node.next equal to oldHead
    // set head property to new node
    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }

    // get pseudocode: retrieve a node by its position
    // if index is < 0 or >= length return null
    // loop through list until you reach index and return node at that index
    get(idx) {
        if (idx < 0 || idx >= this.length) return null
        var counter = 0;
        var current = this.head
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // set pseudocode: change value of a node based on its position
    // accept value and an index
    // use get function to grab index value
    // if node not found, return false
    // if found, set value to be value and return true

    set(idx, val) {
        var foundNode = this.get(idx)
        if (foundNode) {
            foundNode.val = val
            return true;
        }
        return false;
    }

    // insert pseudocode: insert node based on position
    // if index < 0 or > length, return false
    // if index = 0 -> unshift
    // if index = length -> push
    // use get method to access node at index -1 
    // set next properties, increment length and return true
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) { 
            this.unshift(val)
            return true;
        };
        if (idx === this.length) {
            this.push(val);
            return true;
        }; 
        var newNode = new Node(val);
        var beforeNode = this.get(idx-1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.next = afterNode;
        this.length++;
        return true;
    }

    // remove pseudocode: remove node based on position
    // if index < 0 || > length, return undefined
    // if index = length, pop
    // if index = 0, shift
    // use get to access node, set next property on node to be next of the next node
    // decrement length, return removed node
    remove(idx) {
        if (idx < 0 || idx > this.length) return undefined;
        if (idx === this.length-1) {
            this.pop()
        }
        if (idx === 0) {
            this.shift()
        }
        var prevNode = this.get(idx-1)
        var removeNode = prevNode.next
        prevNode.next = removeNode.next
        this.length--;
        return removeNode;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next = null;
        for (let i = 0; i < this.length; i++) {
            // save the next node into a variable 
            // need to do this because connection will be severed..
            next = node.next
            // set the next node to prev
            // prev will initially be set to null (because it's the end of the list)
            node.next = prev
            // once we've done that, we set the previous node to node
            // this moves the previous node (aka the one before) up 
            prev = node;
            // the node is now the next one in line
            node = next;
        }
        return this;
    }

}


var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
