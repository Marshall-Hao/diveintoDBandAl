/**
 * @param {number[]} nums
 * @return {number}
 */
//  * time O(n) space O(n)
var rob = function (nums) {
  if (!nums.length) return 0;
  // * 假设倒数两个值,第0次偷 和第一次偷
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 2; i <= nums.length; i += 1) {
    const dp2 = Math.max(dp0 + nums[i - 1], dp1);
    //   * 类似反复求 有重叠
    dp0 = dp1;
    dp1 = dp2;
    //    console.log(dp1,dp0)
  }

  return dp1;
};
