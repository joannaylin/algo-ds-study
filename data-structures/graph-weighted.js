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

// weighted graph
// not as in depth -> check graph-weighted.js

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}

var wg = new WeightedGraph()

// {
//     "A": [{node: "B", weight: 10}]
// }