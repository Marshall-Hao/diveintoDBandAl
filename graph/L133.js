/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
//  * time O(n) space O(n)
var cloneGraph = function (node) {
  if (!node) return;
  const visited = new Map();
  const dfs = (n) => {
    const nCopy = new Node(n.val);
    // console.log(n.val,n.neighbors)
    visited.set(n, nCopy);
    // console.log(visited)
    n.neighbors.forEach((ne) => {
      if (!visited.has(ne)) dfs(ne);
      // * 将clone的加到neighbor中 *
      nCopy.neighbors.push(visited.get(ne));
    });
  };
  dfs(node);
  // * 起始点的拷贝返回
  return visited.get(node);
};
