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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const inverted = (n) => {
    if (n?.left || n?.right) {
      const temp = n.left;
      n.left = n.right;
      n.right = temp;
      inverted(n.left);
      inverted(n.right);
    }
  };

  inverted(root);
  return root;
};
