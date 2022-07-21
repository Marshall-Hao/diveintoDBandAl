/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  const map = new Map();
  // * map固定的空间值
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  console.log(s.split(""));
  // * array 的foreach 因为后面是个callback fn， 所以只是内部return，不是外面这个大的fn return值
  for (let i = 0; i < s.length; i += 1) {
    let item = s[i];
    if (map.has(item)) {
      stack.push(item);
    } else {
      const t = stack[stack.length - 1];

      if (map.get(t) === item) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
