const bt = require("./bt");

// const preorder = (root) => {
//   if (!root) return;
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };

const preorder = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const t = stack.pop();
    console.log(t.val);
    // * 后进献出
    if (t.right) stack.push(t.right);
    if (t.left) stack.push(t.left);
  }
};

preorder(bt);
