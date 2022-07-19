/**
 * @param {string} s
 * @return {boolean}
 */
const LEFTCOMBO = ["(", "{", "["];
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const parenthese = s[i];
    if (LEFTCOMBO.includes(parenthese)) {
      stack.push(parenthese);
      console.log(stack);
    } else {
      const latestP = stack[stack.length - 1];
      console.log("aaa", latestP);
      switch (latestP) {
        case "(":
          if (parenthese === ")") {
            stack.pop();
            console.log("bbbb", stack);
            break;
          }
          return false;
        case "{":
          if (parenthese === "}") {
            stack.pop();
            console.log(stack);
            break;
          }
          return false;
        case "[":
          if (parenthese === "]") {
            stack.pop();
            console.log(stack);
            break;
          }
          return false;
        default:
          return false;
      }
    }
  }
  console.log(stack.length);
  return stack.length === 0;
};
isValid("()");

// * timecom O(n) space O(n)
