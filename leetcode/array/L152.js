/**
 * @param {number[]} nums
 * @return {number}
 */
//  * time O(n) space O(1)
var maxProduct = function (nums) {
  let max = 1;
  let min = 1;
  let realMax = -Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    // * 对于负数 就是max 和 min要颠倒过来 跟正数是反的
    if (nums[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
    }
    // console.log(max,min)
    // * 动态规划，比较 当前值 以及他再乘一个的大小
    min = Math.min(nums[i], min * nums[i]);
    max = Math.max(nums[i], max * nums[i]);

    realMax = Math.max(realMax, max);
    // console.log(i,realMax,max,min)
  }
  return realMax;
};
