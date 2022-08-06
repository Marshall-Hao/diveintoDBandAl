/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  // * 回溯算法， 判断左括号和右括号的重复条件
  const backtrack = (left, right, str) => {
    // console.log(left,right,str)
    // * n代表n对 那就是如果左括号 有3个 右括号有3个 那就满足 需要推出
    if (left === n && right === n) return result.push(str);
    // * 左括号小于对数 就可以一直加
    if (left < n) backtrack(left + 1, right, str + "(");
    // * 因为右括号与左括号要对应 所以右括号数量不能大于左括号
    if (right < left) backtrack(left, right + 1, str + ")");
  };
  backtrack(0, 0, "");
  return result;
};
