/**
 * @param {number} n
 * @return {number}
 */
//  * time O(n) space O(n)
var climbStairs = function (n) {
  if (n < 2) return 1;
  //  * 本质上还是fib,模拟成第一个 和 第二个
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= n; i += 1) {
    const temp = dp0;
    dp0 = dp1;
    dp1 = temp + dp1;
  }
  return dp1;
};
