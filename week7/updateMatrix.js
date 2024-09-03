/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length; // 3
  const n = mat[0].length; // 3
  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

  // Initialize the queue with all the 0 cells
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  console.log({ queue, dist });

  // Perform BFS
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of [
      [1, 0], //right
      [-1, 0], // left
      [0, 1], // down
      [0, -1], // up
    ]) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        dist[nx][ny] > dist[x][y] + 1
      ) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return dist;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
