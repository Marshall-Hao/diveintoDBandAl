/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = [];
  let map = new Map();
  for (let l of p) {
    if (map.has(l)) {
      map.set(l, map.get(l) + 1);
    } else {
      map.set(l, 1);
    }
  }

  const nestMap = new Map();
  // * 双指针
  let l = 0;
  let valid = 0;
  // * 用了另一种时间复杂度更少的 思路
  for (let r = 0; r < s.length; r += 1) {
    // * 用同一个map 映射 单词里面 字母 与 出现次数的关系
    nestMap.set(
      s[r],
      nestMap.has(s[r]) ? nestMap.get(s[r]) + 1 : 1
    );

    // 如果单词里面此字母出现的次数 与 样本中 字母出现的 次数一样
    if (nestMap.get(s[r]) === map.get(s[r])) {
      //   * 那么有效值加一
      valid++;
    }

    // * 如果这个双指针的窗口 超过了 样本长度
    if (r - l + 1 > p.length) {
      //   * 那么就要收敛左指针
      // * 因为旧的左指针要被移除 相当于到了一个新窗口 如果被移除的那个字母 和样本中的 出现次数一样 但他被将要被移动走了
      if (nestMap.get(s[l]) === map.get(s[l])) {
        //  因此有效值减一
        valid--;
      }
      //   被移走了的那个字母 所以出现要减一
      nestMap.set(s[l], nestMap.get(s[l]) - 1);

      //   * 左指针向内收敛
      l++;
    }

    // * 如果在窗口内 相同的字母个数有效值 与 map相等， 与map做比较是因为 可能有重复的字幕出现
    if (valid === map.size) {
      //   * 返回左边的开始指针下标即可
      res.push(l);
    }
  }
  return res;
};
