/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  function dfs(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    max = Math.max(left + right, max);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return max;
};
