/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  // * 先形成映射关系
  const map = new Map([
    [2, "abc"],
    [3, "def"],
    [4, "ghi"],
    [5, "jkl"],
    [6, "mno"],
    [7, "pqrs"],
    [8, "tuv"],
    [9, "wxyz"],
  ]);
  // * res 输出
  let res = [];
  // * 号码的长度
  let l = digits.length;
  // * 回溯算法
  const combine = (str, l, start, i) => {
    // console.log(str,start,i)
    // * 终止条件 当字符串长度等于 号码长度就停止
    if (str.length === l) {
      res.push(str);
      return;
    }
    //
    // * 检测现在在电话号码的哪个位置 如果超出了电话号码的长度也需要停止
    if (i > l) return;
    // * 拿到当前电话号码所对应的字母
    const letterCombo = map.get(start);
    // * 拿到后然后在这个字母组合里 一个一个的挑出来 作为 新组合的第一个
    for (let j = 0; j < letterCombo?.length; j++) {
      // * 然后往后走一个数字，同样的步骤 拿到当前电话号码数字所对应的字母 作为 新组合的下一个字母
      combine(
        str + letterCombo[j],
        l,
        +digits[i + 1],
        i + 1
      );
    }
  };
  // for(let i =0;i<l;i++) {
  // * 因为无所谓顺序 所以就从第一个 下标0 开始咯
  combine("", l, +digits[0], 0);
  // }
  return res;
};
