function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function isSame(treeP, treeQ) {
    if (treeP === null && treeQ === null) {
      return true;
    }
    // If one of the nodes is null or their values are different, they're not equal
    if (treeP === null || treeQ === null || treeP.val !== treeQ.val) {
      return false;
    }
    // Recursively check left and right subtrees
    return isSame(treeP.left, treeQ.left) && isSame(treeP.right, treeQ.right);
  }
  return isSame(p, q) === false ? false : true;
};

var isSameTreeo = function (p, q) {
  if (p == null || q == null) {
    return p === q;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.right = new TreeNode(5);
root2.right = new TreeNode(3);

console.log(isSameTree(root, root2));
