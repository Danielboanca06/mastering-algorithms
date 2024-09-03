/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, prerequisite] of prerequisites) {
    graph[course].push(prerequisite);
  }

  // Array to keep track of visited nodes during DFS
  const visited = Array(numCourses).fill(false);
  // Array to keep track of nodes visited in the current DFS traversal
  const onStack = Array(numCourses).fill(false);

  console.log({ graph, visited, onStack });

  // DFS function to detect cycles
  function hasCycle(node) {
    if (visited[node]) return false;

    visited[node] = true;
    onStack[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        if (hasCycle(neighbor)) {
          return true;
        }
      } else if (onStack[neighbor]) {
        return true; // Cycle detected
      }
    }

    onStack[node] = false;
    return false;
  }

  // Check for cycles in each node (course)
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false; // If a cycle is detected, it's impossible to finish all courses
    }
  }

  return true; // If no
};

console.log(canFinish(2, [[1, 0]]), "expected, true");
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
  "expected, false"
);
// console.log(
//   canFinish(20, [
//     [0, 10],
//     [3, 18],
//     [5, 5],
//     [6, 11],
//     [11, 14],
//     [13, 1],
//     [15, 1],
//     [17, 4],
//   ]),
//   "expected, false"
// );
