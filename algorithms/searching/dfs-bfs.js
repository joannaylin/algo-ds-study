// Depth First Search & Breadth First Search

/*
Depth First Search
- uses a stack (includes callstack (using recursion))
- Last In; First Out
- Uses: 
  - backtracking, complete search, exhausting possible paths
- goes deep  
- if tree, and balanced: O(H) space complexity where H is the height of the tree

Algorithm: *for implementation, see data-structures/binary-search-tree
- utilize a stack to make note of what nodes you need to visit, add all children to TOP 
- pop last item off of stack and check node, add all children
- repeat
*/

/*
Breadth First Search
- iteratively with a queue
- First In; First Out
- Uses: 
  - check if a path exists between two nodes, finding "hops" or distance out or "levels" away
- goes wide

Algorithm: * see data-structures/binary-search-tree
- utilize a queue to make note of what nodes you need to visit, add children to BACK  
- remove first item in queue
- repeat

*/