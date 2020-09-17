/* 
Dijkstra's Algorithm 
- algorithm for finding the shortest paths between nodes in a weighted graph
    - can be used for GPS (fastest route), biology (spread of viruses among humans), airline tickets (finding cheapest route)
- acts upon a graph
- utilizes a priority queue (binary heap)

Big O (Time Complexity):


Big O (Space Complexity):

*/

class WeightedGraph {
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1,vertex2, weight){
      this.adjacencyList[vertex1].push({node:vertex2, weight});
      this.adjacencyList[vertex2].push({node:vertex1, weight});
  }

  Dijkstra(start, finish){
      const nodes = new PriorityQueue();
      // distances is an obj that holds the running totals of distances for each node
      const distances = {};
      // previous is an obj to keep track of where we have been
      const previous = {};
      // returning the path from start to finish at end of this function 
      let path = [] //to return at end
      let smallest;

      // build up initial state
      // go through all nodes in adjacency List 
      for(let vertex in this.adjacencyList){
          if(vertex === start){
              distances[vertex] = 0;
              nodes.enqueue(vertex, 0);
          } else {
              distances[vertex] = Infinity;
              nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
      }

      // as long as there is something to visit (in this priority queue)
      while (nodes.values.length){
          // whenever we dequeue from priority queue (it's the smallest val)
          smallest = nodes.dequeue().val;
          if (smallest === finish){
              // WE ARE DONE
              // BUILD UP PATH TO RETURN AT END (follow breadcrumbs)
              while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          // loop through all neighbors in the adjacency list 
          // remember smallest is the smallest value from the vertex list (nodes)
          if (smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  // find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  // calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;

                  // checks if distances obj needs to be updated (don't need to update if equal)
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - How we got to neighbor
                      previous[nextNeighbor] = smallest;
                      //enqueue in priority queue with new priority
                      nodes.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }
      return path.concat(smallest).reverse();     
  }
}

/* 
priority queue: elements with higher priorities are served before elements with lower priorities
- min binary heap
- lower number means higher priority

Big O (Time Complexity)
N is the number of nodes
- Insertion: O(logN)
- Removal: O(logN)
- Search: O(N)
*/
class PriorityQueue {
  constructor(){
      this.values = [];
  }

  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }

  // bubbleUp is the method that places the node in the proper location 
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if (element.priority >= parent.priority) break;
          // swap elements based on priority 
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }

  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }

  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          // keep track of number so that it can be changed if right child is smaller
          let swap = null;

          if (leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if (leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if (rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if (
                  // if we haven't swapped and the right child priority is less than the element priority
                  (swap === null && rightChild.priority < element.priority) || 
                  // if we have swapped and the right child priority is less than the left child priority
                  // checks left child value to confirm swap right child 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          // we're done, no need to swap
          if (swap === null) break;

          // actually do swap 
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

// node with value and priority
class Node {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");




