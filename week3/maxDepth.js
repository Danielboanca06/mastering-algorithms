function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
//recursion
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

//itterative
function maxDeptho(root) {
  if (!root) {
    return 0;
  }

  let depth = 0;
  let queue = [root];

  while (queue.length > 0) {
    depth++;
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return depth;
}

let root = new TreeNode(0);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(null);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(-1);
root.left.left.left = new TreeNode(5);
root.left.left.right = new TreeNode(1);
root.right.left.left = new TreeNode(null);
root.right.left.right = new TreeNode(6);
root.right.right.left = new TreeNode(null);
root.right.right.right = new TreeNode(8);

let rooto = new TreeNode(1);
rooto.right = new TreeNode(2);

console.log(maxDepth(root));
console.log(maxDepth(rooto));
