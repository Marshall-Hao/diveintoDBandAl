/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//  * time O(nlogn) space O(n)
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    if (map.has(n)) {
      let i = map.get(n);
      map.set(n, i + 1);
    } else {
      map.set(n, 1);
    }
  });

  const mapArray = [...map.entries()];

  //   *nlogn
  mapArray.sort((a, b) => {
    return b[1] - a[1];
  });

  return mapArray.slice(0, k).map((m) => m[0]);
};
