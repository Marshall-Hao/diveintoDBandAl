/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  // * 二分搜索法
  let low = 0;
  let high = nums.length - 1;
  //   * time O(logN)
  while (low <= high) {
    //   * 假设就从分出来的那一段中间开始搜索
    const mid = Math.floor((low + high) / 2);
    const element = nums[mid];
    const rightest = nums[high];
    const leftest = nums[low];
    // 刚好相等
    if (element === target) {
      return mid;
      // * 因为这个数组不是个广义上的升序数组，但是左右两边分别是升序的
      // * 如果中间这个值小于 右边最大的，那就说明 这一段是处在右边
    } else if (element < rightest) {
      // * 假设目标值是小于右边这一段最大的，那么中间值就要往右边靠，这个是唯一往右边靠的情况
      if (element < target && target <= rightest) {
        low = mid + 1;
        // * 否则 往左边靠 比如比他大啦，目标值比右边最大的还大啦
      } else {
        high = mid - 1;
      }
      // 如果中间值 大于右边最大值 那就出现在左边的升序数组
    } else {
      //  唯一往左边靠的情况 中间值比他大 同时 目标值大于左边的最小值 那就在左边那一段
      if (leftest <= target && target < element) {
        high = mid - 1;
        //  * 否则 右边靠 比如 比中间值大啊 或者 目标值 是小于左边最小值的
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
};
