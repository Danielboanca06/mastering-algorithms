function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [root.val];
  let stack = [root];
  while (stack.length !== 0) {
    let node = stack.pop();
    result.push(node.val);

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result.reverse();
};

const root = new TreeNode(3);
root.right = new TreeNode(20);
root.right.right = new TreeNode(15);
root.right.right.right = new TreeNode(7);

console.log(postorderTraversal(root));
