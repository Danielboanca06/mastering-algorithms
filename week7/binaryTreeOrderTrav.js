const result = [];

const traverse = (root) => {
  let result = [];

  function rec(node, level) {
    if (!node) return;

    if (!result[level]) {
      result[level] = [];
    } else {
      result.push(node.val);
    }

    rec(node.left, level + 1);
    rec(node.right, level + 1);
  }

  rec(root, 0);
  return result;
};
