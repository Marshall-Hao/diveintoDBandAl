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
 * @return {boolean}
 */
//  time O(n) space O(n) or logN
var isSymmetric = function (root) {
  if (!root) return true;
  const isMirror = (l, r) => {
    // * 递归终点
    if (!l && !r) return true;
    if (
      l &&
      r &&
      l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true;
    }
    return false;
  };
  return isMirror(root.left, root.right);
};
