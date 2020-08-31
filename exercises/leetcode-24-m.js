// LeetCode 24: Swap Nodes in Pairs (Medium)

/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Given 1->2->3->4, you should return the list as 2->1->4->3. 
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || head.next === null) return head
  let firstNode = head
  let secondNode = head.next  
  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  return secondNode
};


var swapPairs = function(head) {
  // base case
  if (head === null || head.next === null) return head;
  let temp = head.next;
  head.next = temp.next;
  temp.next = head;
  head.next = swapPairs(head.next);
  return temp;
};