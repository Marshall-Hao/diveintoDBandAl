const bt = require("./bt");

// const postorder = (root) => {
//   if (!root) return;
//   postorder(root.left);
//   postorder(root.right);
//   console.log(root.val);
// };

const postorder = (root) => {
  if (!root) return;
  const stack = [root];
  const reversStack = [];
  while (stack.length) {
    const t = stack.pop();
    reversStack.push(t);
    if (t.left) stack.push(t.left);
    if (t.right) stack.push(t.right);
  }
  //   * 模拟倒序输出
  while (reversStack.length) {
    const n = reversStack.pop();
    console.log(n.val);
  }
};

postorder(bt);
