/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  time O(n) space O(1)
var productExceptSelf = function (nums) {
  // * 因为要考虑时间复杂度 所以不能用两个for循环叠加

  // * 将整个问题划分成两部分
  // * 此元素全部左边元素的乘积 以及 全部右边元素的乘积
  let resLeft = 1;
  let resRight = 1;
  let res = [];

  // * 进行左边元素的乘积
  for (let i = 0; i < nums.length; i++) {
    // * 第0个元素前没有左边元素了
    if (i > 0) {
      // * 根据当前index 更新左边元素的乘积
      // * 第一个就是1 然后第二个 就是 resleft * 下表 0 ，第三个 就是上一个resleft * 下标1 以此类推，每一轮resleft都会更更新
      resLeft = resLeft * nums[i - 1];
    }
    // * 每一轮的更新通过数组记录下来，有index作为依据
    res[i] = resLeft;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    // * 最后一个元素 没有右边元素了
    if (i < nums.length - 1) {
      // * 与左边同理 ，最后一个元素就是resleft 1 ，倒数第二个 就是 resleft * 最后一个下标元素，以此类推
      resRight = resRight * nums[i + 1];
    }
    // * 每一轮的更新通过数组记录下来，有index作为依据，同时res 已经有了当前左边的乘积结果，相乘即可
    res[i] *= resRight;
  }

  return res;
};
