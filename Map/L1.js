/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// * time O(n^2) space O(1) ---> res
var twoSum = function (nums, target) {
  const res = [];
  nums.length &&
    nums.forEach((num, i) => {
      const back = nums.lastIndexOf(target - num);
      if (back !== -1 && back !== i) {
        res.push(i, back);
        nums = [];
      }
    });
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  * time O(n) space O(n)
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const numMatch = target - num;
    if (map.has(numMatch)) {
      return [map.get(numMatch), i];
    } else {
      map.set(num, i);
    }
  }
};
