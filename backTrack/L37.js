/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let hash_c = new Array(9); // 分别储存9列，9行和9个九宫格的已用数字
  let hash_r = new Array(9);
  let hash_b = new Array(9);
  let solved = false; // 判定退出递归的标志位
  let unknowns = []; // 记录空白点

  for (let i = 0; i < 9; i++) {
    // 初始化
    if (!hash_r[i]) hash_r[i] = [0];
    for (let j = 0; j < 9; j++) {
      if (!hash_c[j]) hash_c[j] = [0];
      if (
        !hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)]
      )
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)] =
          [0];

      let num = board[i][j] * 1;
      if (num) {
        hash_r[i][num] = 1;
        hash_c[j][num] = 1;
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          num
        ] = 1;
      } else unknowns.push({ i, j });
    }
  }

  const solveItem = (index) => {
    // 遍历空白的点
    if (solved) return;
    let allows = [];
    const { i, j } = unknowns[index];
    for (let k = 1; k <= 9; k++) {
      // 获取可用数
      if (
        hash_r[i][k] !== 1 &&
        hash_c[j][k] !== 1 &&
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          k
        ] !== 1
      ) {
        allows.push(k);
      }
    }
    if (!allows.length) return; // 已经没有合法数字
    if (index === unknowns.length - 1) solved = true;

    for (let k = 0; k < allows.length; k++) {
      let num = `${allows[k]}`;
      board[i][j] = num;
      hash_r[i][num] = 1;
      hash_c[j][num] = 1;
      hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
        num
      ] = 1;
      solveItem(index + 1);
      if (solved) break;
      else {
        // 回溯
        board[i][j] = ".";
        hash_r[i][num] = 0;
        hash_c[j][num] = 0;
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          num
        ] = 0;
      }
    }
  };

  while (!solved) solveItem(0);
  return board;
};
