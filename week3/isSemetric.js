function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var isSem = function (root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
};
function isMirror(left, right) {
  // If both nodes are null, they are considered mirrors
  if (!left && !right) return true;

  // If only one node is null, they are not mirrors
  if (!left || !right) return false;

  // If the values of the nodes are not equal, they are not mirrors
  if (left.val !== right.val) return false;

  // Recursively check if the left subtree is a mirror of the right subtree's right
  // And the right subtree is a mirror of the left subtree's left
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

const root = new TreeNode(3);
root.right = new TreeNode(20);
root.right.right = new TreeNode(15);
root.right.right.right = new TreeNode(7);

console.log(isSem(root));
