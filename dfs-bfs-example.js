const invertTreeDFS = function (root) {
  // Itterative DFS
  if (!root) return root;

  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    [current.left, current.right] = [current.right, current.left];

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return root;
};

const invertTreeDFSRec = function (root) {
  //Recursive DFS
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTreeDFSRec(root.left);
  invertTreeDFSRec(root.right);

  return root;
};

const invertTreeBFS = function (root) {
  // Itterative BFS
  if (!root) return root;

  const queue = [root];

  while (stack.length) {
    const current = queue.shift();

    [current.left, current.right] = [current.right, current.left];

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }
  return root;
};

const invertTreeBFSRec = function (root) {
  // Recursive BFS
  if (!root) return root;

  const bfs = (nodes) => {
    if (nodes.length === 0) return;

    const nextLevel = [];

    for (let node of nodes) {
      [node.left, node.right] = [node.right, node.left];

      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    bfs(nextLevel);
  };

  bfs([root]);

  return root;
};
