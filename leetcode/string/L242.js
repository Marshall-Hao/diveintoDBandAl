/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  * 这个方法 可以考虑到unicode
var isAnagram = function (s, t) {
  // * size不一样 肯定匹配不上
  if (s.length !== t.length) return false;
  // * 因为是单词 所以可以创建一个 26位的数组 来表示 每个 字母出现的次数
  const resSet = new Array(26).fill(0);
  // * 字母最小是a 所以以 a 作为基底 得到 unicode 的decimal 数字 因为这样可以跟 26 下标 对应
  const base = "a".charCodeAt();
  // * 遍历第一个单词
  for (const i of s) {
    // * 减去a这个基底 就是 26个里面排第几 就可以通过 array的下标 找到 然后增加出现的次数
    resSet[i.charCodeAt() - base]++;
  }

  // * 遍历第二个单词
  for (const i of t) {
    // * 长度相同的时候 如果发现 第二个单词某个字母出现次数 为0，说明1.第一个单词没有这个字母 2，循环到这个字母的时候 这个字母在第二个单词有剩余 所以 不一致 报错
    if (!resSet[i.charCodeAt() - base]) return false;
    // * 同样找到每个字母的 在的地方 有就 减一 都一样就会变为0
    resSet[i.charCodeAt() - base]--;
  }
  return true;
};
