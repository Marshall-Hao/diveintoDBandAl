/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = [];
  const helper = (start, prev) => {
    for (let i = start; i <= n; i++) {
      // 第一层
      // * 先运行第一层 依次加进去 1《-2 1 1〈-3 1《4
      const cur = prev.concat(i);
      console.log(prev, cur);
      if (cur.length === k) {
        // 出口条件
        ret.push(cur);
      } else {
        // * 然后在进行下一层
        // * 比如 2《- 3 2〈-4
        helper(i + 1, cur); // 第二层
      }
    }
  };
  helper(1, []);
  return ret;
};
