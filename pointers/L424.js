/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // * 使用双指针解决这道题，定义好左指针从0开始
  let l = 0,
    res = 0;
  // * 这种题可以用字典
  let map = new Map();
  // * 右指针先行
  for (let r = 0; r < s.length; r += 1) {
    //    * 在字典里面 定义每个字母出现的个数
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) + 1);
    } else {
      map.set(s[r], 1);
    }
    //    console.log(map)
    let max = 0;
    //    * 取到出现最多次的个数
    // * 可以这样理解： 出现最多次的个数 + 变换的k 才最有可能形成最长 重复字符
    for (let [key, value] of map) {
      max = Math.max(max, value);
    }
    // console.log(max)
    // * 如果 在这一段 左右指针形成的窗口里面 出现最多次的个数 + 变换的k仍然没有达到长度 那代表应该不是连续的 中间肯能会空其他字母 所以此时此刻就要移动左指针 进行收敛 看下能不能达到一个连续的感觉
    while (r - l + 1 > max + k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    // * 看满足条件的最大距离长度
    res = Math.max(res, r - l + 1);
  }
  return res;
};
