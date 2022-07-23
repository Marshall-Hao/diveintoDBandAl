/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
//  * time O(m*n) space O(m*n)
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) return [];
  const m = heights.length;
  const n = heights[0].length;
  // * 能流到太平洋的matrix
  const flow1 = Array.from({ length: m }, () =>
    new Array(n).fill(false)
  );
  // * 能流到大西洋的matrix
  const flow2 = Array.from({ length: m }, () =>
    new Array(n).fill(false)
  );
  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    let next = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ];
    // * 上，下，左，右         下一个节点 下一行 下一列
    next.forEach(([nr, nc]) => {
      if (
        // * 保证在矩阵中
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // * 节点没有访问过 重点
        !flow[nr][nc] &&
        // * 逆流而上
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // * 沿着海岸线逆流而上 重点
  // * 左右两边
  for (let r = 0; r < m; r += 1) {
    // * 流到太平洋，第一列的每一行
    dfs(r, 0, flow1);
    // * 流到大西洋，最后一列的每一行
    dfs(r, n - 1, flow2);
  }
  // * 上下两边
  for (let c = 0; c < n; c += 1) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }

  // * 收集重复都有true的坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
