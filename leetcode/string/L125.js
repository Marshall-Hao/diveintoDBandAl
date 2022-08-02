/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // * 通过正则 将字符串里非 a-zA-Z0-9 都替换为空，转为小谢
  let res = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // * 因为如果是回文串，所以首尾 会对称相等
  for (let i = 0; i < res.length >> 1; i++) {
    //   * 一旦不对称相等 就false
    if (res[i] !== res[res.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
