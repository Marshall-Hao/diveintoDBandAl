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
//  * time O(n) space O(n) or O(logN)
var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l = 1) => {
    if (!n) return;
    // * 只在最后一层叶子才更新最大值
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    // * 有字节点就层级+1
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};
