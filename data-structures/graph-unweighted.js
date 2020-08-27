/* 
Graph
- graph is a set of vertices that are connected
- vertex: node
- edge: connection between nodes
- unweighted/weighted: values assigned to distances between vertices
    - unweighted: each edge has no value
    - weighted: each edge has a value (info about the connection itself)
- directed/undirected: directions assigned to distances between vertices
    - undirected: two-way connections
    - directed: one-way connections
- store graphs in an adjacency matrix or list
    - adjacency matrix is a table with vertices as rows and columns (0 for no edge, 1 for edge)
        - connections don't matter, but vertices matter
        - grows as vertices grows 
        - takes up more space 
        - slower to iterate over all edges, faster to look up specific edge
    - adjacency list is an array, with each edge having its own array to show connections
        - can also use hash table (value to each key is an array of connections)
        - faster to iterate over all edges, slower to look up specific edge
        - takes up less space
- most data in real-world tends to lend itself to sparser and/or larger graphs 

Implementation Cases: 
- social networks, location/mapping, routing algos, visual hierarchy, file system optimizations

*/

/*
Graph Traversal Uses
- peer to peer networking, web crawlers, finding "closest" matches or recs, shortest path problems
- important to know where you've been
*/

// undirected graph
// no error handling here

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }   

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(a => a !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(b => b !== v1)
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    // if vertex is empty
        // return (base case)
    // add vertex to results list
    // mark vertex as visited
    // for each neighbor in vertex's neighbors: 
        // if neighbor is not visited:
            // recursively call DFS on neighbor
    dfsRecursive(vertex) {
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList

        function dfs(v) {
            if (!v) return null;
            visited[v] = true;
            result.push(v)
            adjacencyList[v].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }

        dfs(vertex)

        return result;
    }

    // let S be a stack
    // S.push(vertex)
    // while S is not empty
        // vertex = S.pop()
        // if vertex is not labeled as discovered:
            // visit vertex (add to result list)
            // label vertex as discovered
            // for each of vertex's neighbors, N do
                // S.push(N)
    dfsIterative(vertex) {
        let stack = [vertex];
        let result = [];
        let visited = {};
        let currentVertex;
    
        while (stack.length) {
            currentVertex = stack.pop()
            visited[currentVertex] = true;
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }

        return result;
    }

    bfs(vertex) {
        let queue = [vertex];
        let result = [];
        let visited = {};
        let currentVertex;

        while (queue.length) {
            currentVertex = queue.shift();
            visited[currentVertex] = true;
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        
        return result;
    }

}


var g = new Graph();
// g.addVertex("San Francisco")
// g.addVertex("Los Angeles")
// g.addVertex("Dallas")
// g.addVertex("Tokyo")
// g.addVertex("Hong Kong")
// g.addEdge("Los Angeles", "Tokyo")
// g.addEdge("San Francisco", "Tokyo")
// g.addEdge("Dallas", "Hong Kong")

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
