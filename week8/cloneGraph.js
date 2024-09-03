// Definition for a Node.
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

// Function to clone the graph
var cloneGraph = function (node) {
  if (!node) return null;

  // Map to keep track of cloned nodes
  const clonedNodes = new Map();

  // Depth-first search function
  const dfs = (originalNode) => {
    // If the node has already been cloned, return its clone
    if (clonedNodes.has(originalNode)) return clonedNodes.get(originalNode);

    // Create a clone of the current node
    const clonedNode = new Node(originalNode.val);
    // Add the cloned node to the map
    clonedNodes.set(originalNode, clonedNode);

    // Recursively clone neighbors
    for (const neighbor of originalNode.neighbors) {
      const n = dfs(neighbor);
      console.log({ n });
      clonedNode.neighbors.push(n);
    }

    return clonedNode;
  };

  return dfs(node);
};

// Creating the original graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

// Calling the cloneGraph function with the original graph
const clonedGraph = cloneGraph(node1);

// Logging the cloned graph for verification
console.log(clonedGraph);
