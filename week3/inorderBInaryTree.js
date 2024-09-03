// Definition for a binary tree node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const inorder = function (node) {
    if (node === null) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  return result;
};

var inorderTraversalItteratively = function (root) {
  const result = [];
  const stack = [];
  let currentNode = root;

  while (currentNode !== null || stack.length !== 0) {
    while (currentNode !== null) {
      stack.push(currentNode);
      console.log(stack);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return result;
};

var inorderTraversalRe = function (root) {
  if (root === null) return [];
  let left = inorderTraversal(root.left);
  left = [...left, root.val];
  let right = inorderTraversal(root.right);
  return [...left, ...right];
};

// Example usage:
// Construct a binary tree
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

// Call inorderTraversal function
console.log(inorderTraversal(root)); // Output: [1, 3, 2]
console.log(inorderTraversalItteratively(root));
console.log(inorderTraversalRe(root));
