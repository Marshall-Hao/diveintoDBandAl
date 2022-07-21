/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//  * time O(m+n) space O(m)
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  // * 双指针，固定的左 移动的右
  let l = 0;
  let r = 0;
  const need = new Map();
  for (let c of t) {
    // * t里面有重复字符的情况，把数量就可以对应上
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  let needType = need.size;
  let res = "";
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType -= 1;
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType++;
      }
      l++;
    }
    r++;
  }
  return res;
};
