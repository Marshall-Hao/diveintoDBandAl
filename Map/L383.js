/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0),
    base = "a".charCodeAt();
  for (const s of magazine) {
    strArr[s.charCodeAt() - base]++;
  }
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base;
    // * 说明在勒索信里的次数大于了 杂志能找到的单词的次数 所以不满足 false
    if (!strArr[index]) return false;
    strArr[index]--;
  }
  return true;
};
