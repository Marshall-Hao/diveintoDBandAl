/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  const res = [];
  // * 新建一个队列，队列里面存贮的是下标，所以可以通过下标的差值确定间隔永远是k
  const queue = [];

  // * 因为是向右边移动，所以right的东西被加进去
  for (let right = 0; right < nums.length; right++) {
    //当队列不为空的时候且当前元素>=队尾的元素，则将队尾的元素 也就是下标 删除，因为要保证一个单向递减队列
    while (
      queue.length &&
      nums[right] >= nums[queue[queue.length - 1]]
    ) {
      queue.pop();
    }
    //存储元素的下标
    queue.push(right);
    //通过新的加进来的右边下标 计算窗口的左边界
    let left = right - k + 1;
    //当队首元素的下标<滑动窗口的左边界时，代表 队首的元素不在滑动窗口内，删除队首元素。
    if (queue[0] < left) {
      queue.shift();
    }
    //因为数组下标从0开始，当右边界+1>=窗口大小时，此时，窗口形成，将队首的元素放入结果。因为是递减 所以第一个是最大的
    if (right + 1 >= k) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
};
