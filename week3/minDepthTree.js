function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.right), minDepth(root.left)) + 1;
};

const root = new TreeNode(3);
root.right = new TreeNode(20);
root.right.right = new TreeNode(15);
root.right.right.right = new TreeNode(7);

console.log(minDepth(root));
