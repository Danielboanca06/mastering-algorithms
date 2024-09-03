function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//if (nums.length === 0) return null;
//   let root = new TreeNode(nums[0]);
//   let stack = [root];
//   for (let i = 1; i < nums.length; i += 2) {
//     const parent = stack.shift();

//     if (i < nums.length) {
//       parent.left = new TreeNode(nums[i]);
//       stack.push(parent.left);
//     }
//     if (i + 1 < nums.length) {
//       parent.right = new TreeNode(nums[i + 1]);
//       stack.push(parent.right);
//     }
//   }
//   console.log(root);
//   //   let order;
//   //   function inorder(root) {
//   //     if (root === null) return;
//   //     inorder(root.left)
//   //     order = root;
//   //     inorder(root.right);
//   //   }
//   //   inorder(root);
//   //   return order;
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

console.log(
  [-10, -3, 0, 5, 9, 20, 22, 2].slice(0, 4),
  [-10, -3, 0, 5, 9, 20, 22, 2].slice(4 + 1)
);
