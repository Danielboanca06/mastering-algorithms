function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function getHeight(root) {
    if (!root) return 0;
    const l = getHeight(root.left);
    const r = getHeight(root.right);
    if (l === -1 || r === -1 || Math.abs(l - r) > 1) {
      return -1;
    }
    return Math.max(l, r) + 1;
  }
  return getHeight(root) !== -1;
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(isBalanced(root));
