/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//   time O(2^N) space O(N)
var subsets = function (nums) {
  const res = [];
  const backtrack = (path, l, start) => {
    console.log(path, l, start);
    if (path.length === l) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i += 1) {
      backtrack(path.concat(nums[i]), l, i + 1);
    }
  };
  for (let i = 0; i <= nums.length; i += 1) {
    backtrack([], i, 0);
  }
  return res;
};
