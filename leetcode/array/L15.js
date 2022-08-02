/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  * time O(n^2) space O(1)
var threeSum = function (nums) {
  // * 数组的长度小于3，就找不到匹配
  if (nums.length < 3) return [];
  let ans = [];
  // * 由小到大排序 这个想法是重点
  nums.sort((a, b) => a - b);

  // * 遍历数组 双指针
  for (let i = 0; i < nums.length; i += 1) {
    // * 因为是从小到大排列 如果第一个数就大于 0 那么 后两个也大于0 之和肯定拿不到0 可以直接停止循环了
    if (nums[i] > 0) break;
    // * 因为结果里不能有相同的结果，如果当前循环到的下标元素与上一个相同，那么肯定会产生相同的结果，因为L和R 都在后面
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // * 每一轮都左边向内收敛
    let L = i + 1;
    let R = nums.length - 1;
    //  确保左右指针的范围
    while (L < R) {
      // * 求和
      const sum = nums[i] + nums[L] + nums[R];
      // 和为0 那么就可以移动左右指针看新的范围
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        // * 如果 下一个左指针的值和当前相同 那么肯定还会造成相同的结果 或者找不到结果 那么就可以 错过这个了
        while (L < R && nums[L] === nums[L + 1]) L++;
        //  * 如果 下一个右指针的值和当前相同，那么肯定还会造成相同的结果 或者找不到结果 那么也可以 错过这个
        while (L < R && nums[R] === nums[R - 1]) R--;

        // * 左右向内收敛
        L++;
        R--;
      } else if (sum < 0) {
        // *。如果和和 小于0 那么 肯定加得数小了 那么左边的边界就要变大
        L++;
      } else {
        //  * 如果和 大于 0 那么代表加得数大了 那就要让最大的变小 那么右边的边界就要变小
        R--;
      }
    }
  }

  return ans;
};
