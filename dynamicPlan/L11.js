/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height.length) return 0;
  // * 动态规划 进行左右收敛
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  while (left < right) {
    // * 水位高度只能取少的
    let realHeight = Math.min(height[left], height[right]);
    // * 每次循环得到的新面积跟老的比 取最大值
    ans = Math.max(ans, realHeight * (right - left));

    // * 左比右小的话 就像右收敛
    if (height[left] < height[right]) {
      left++;
      // * 右 比左 小就向左收敛
    } else {
      right--;
    }
  }

  return ans;
};
