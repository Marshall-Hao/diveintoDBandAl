/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = "";

  for (let i = 0; i < s.length; i++) {
    // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
    helper(i, i);
    helper(i, i + 1);
  }

  function helper(l, r) {
    // 定义左右双指针
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
    const maxStr = s.slice(l + 1, r + 1 - 1);
    // 取最大长度的回文字符
    if (maxStr.length > max.length) max = maxStr;
  }
  return max;
};
