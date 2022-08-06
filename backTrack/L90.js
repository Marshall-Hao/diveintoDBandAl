/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  * O(n^2) space O(n)
var subsetsWithDup = function (nums) {
  // * 去重的话 先排序吧 保证重复元素挨在一起
  nums.sort();
  const res = [];
  const length = nums.length;
  const backTrack = (path, l, start) => {
    // console.log(path,l,start)
    if (path.length === l) {
      res.push(path);
    }
    for (let i = start; i < length; i += 1) {
      console.log(nums[i], nums[i - 1], start, i);

      // * 重要去重的一步  而我们要对同一树层使用过的元素进行跳过
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }
      backTrack(path.concat(nums[i]), l + 1, i + 1);
    }
  };

  backTrack([], 0, 0);

  return res;
};
