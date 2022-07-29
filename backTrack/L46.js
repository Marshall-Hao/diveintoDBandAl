/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  * 难哦 都算临时的 time O(n!) space O(n)
var permute = function (nums) {
  const res = [];
  const backTrack = (path) => {
    // console.log(path)
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n) => {
      // console.log(n)
      if (path.includes(n)) return;
      backTrack(path.concat(n));
    });
  };
  backTrack([]);
  return res;
};
