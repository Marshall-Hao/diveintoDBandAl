/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  * 这道题用字典来表示
var groupAnagrams = function (strs) {
  const map = new Map();
  const ref = "a".charCodeAt();
  const getKey = (w) => {
    let letterArray = new Array(26).fill(0);
    for (let l of w) {
      const position = l.charCodeAt() - ref;
      letterArray[position] += 1;
      // * 防止10，1，0 与 1，0，10 join起来的样子相同
      if (letterArray[position] === 10)
        letterArray[position] += 1;
    }

    return letterArray.join("");
  };

  for (let item of strs) {
    // 获取 item 的 key，保证相同字母组合的 key 相同。
    const key = getKey(item);

    if (map.get(key)) {
      map.get(key).push(item);
    } else {
      map.set(key, [item]);
    }
  }
  return [...map.values()];
};
