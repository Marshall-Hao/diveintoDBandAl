/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set3 = new Set(
    nums1.filter((item) => nums2.includes(item))
  );
  return [...set3];
};

// * filter 是O(n) includes也是要一个个遍历看想不想等 所以也是O(n)嵌套了 所以 是 n * n
// * time O(n^2) space O(n)
