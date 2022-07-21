/**
 * @param {string} s
 * @return {number}
 */
// * time O(n) space O(m)
var lengthOfLongestSubstring = function (s) {
  // * 左指针
  let l = 0;
  let res = 0;
  const map = new Map();
  // * 移动的右指针
  for (let r = 0; r < s.length; r++) {
    // * map里能找到代表重复，同时要注意在滑动窗口里
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      // * 那个重复值第一次出现所在位置，重新给左指针，因为下一个移动没有意义肯定比开头开始滑动的距离要小，所以从下一个算距离
      l = map.get(s[r]) + 1;
    }
    // * 取最大距离，新的大不了，就一直是旧的
    res = Math.max(res, r - l + 1);
    // * 设定唯一的取值的index
    map.set(s[r], r);
  }
  return res;
};
