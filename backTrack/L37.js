/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var solveSudoku = function (board) {
  // * 新数组存column
  let hash_c = new Array(9);
  //   * 数组寸 row
  let hash_r = new Array(9);
  //   * 数组存 3X3
  let hash_b = new Array(9);
  // 判定退出递归的标志位
  let solved = false;
  // 记录空白点 "."
  let unknowns = [];

  for (let i = 0; i < 9; i++) {
    // 初始化 构成一个新的 9 * 9

    // * 让
    if (!hash_r[i]) hash_r[i] = [0];
    for (let j = 0; j < 9; j++) {
      if (!hash_c[j]) hash_c[j] = [0];
      // 3*3 矩阵 以下数字都代表下标
      // 横着 0  对应 竖 0 3 6 可形成 3x3的 0 1 2
      // 横着 3  对应 竖 0 3 6 可形成 3x3的 3 4 5
      // 横着 6  对应 竖 0 3 6 可形成 3x3的 6 7 8
      if (
        !hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)]
      )
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)] =
          [0];

      // * 跟真实数独盘 形成 映射关系
      // * 找到含 有效数字的 乘一 是因为 string * num 会是 NaN
      let num = board[i][j] * 1;
      // * 是有效数字的话
      if (num) {
        //   那么进行映射
        // * 这个映射关系有点绕 需要多理解
        // * 理解映射关系：如果这个数字出现了的话 那么就会在 映射的行，列或九宫格的位置 赋值1
        hash_r[i][num] = 1;
        hash_c[j][num] = 1;
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          num
        ] = 1;
        //   * 否则 那么就记录 下这个具体位置 稍后使用
      } else unknowns.push({ i, j });
      //   console.log('col')
      //   console.log(hash_c)
      //    console.log('row')
      //   console.log(hash_r)
      //     console.log('3x3')
      //   console.log(hash_b)
    }
  }
  console.log("col");
  console.log(hash_c);
  console.log("row");
  console.log(hash_r);
  console.log("3x3");
  console.log(hash_b);
  console.log(unknowns);
  // * 遍历那些没有被赋值1的位置
  const solveItem = (index) => {
    //   * 全部都解决了 就不用管了
    if (solved) return;
    let allows = [];
    // * 得到对应的位置
    const { i, j } = unknowns[index];
    // * i，j对应的是行数和列数 ，容量都为9
    // * 遍历这个 为.的位置 所占据的行和列 以及九宫格 的每个位置，把没有东西的位置k记录下来
    for (let k = 1; k <= 9; k++) {
      if (
        hash_r[i][k] !== 1 &&
        hash_c[j][k] !== 1 &&
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          k
        ] !== 1
      ) {
        //   * 满足条件 那么这个位置可以被记录下来
        // * 把实际的重复数字比较 转化为 位置，已经被占据的位置都用1表示，那么就可以获取到没有被1占据的k的位置
        allows.push(k);
      }
    }

    // *如果一直找不到满足条件的位置 直接返回
    console.log(index, i, j, allows, board[i][j]);
    if (!allows.length) return; // 已经没有合法数字
    // * 如果遍历到最后一个了 那么就代表解决了 退出条件
    if (index === unknowns.length - 1) solved = true;
    // * 针对于 这个 还没有赋值的位置 ，遍历他在情况下 可能出现的值 已经映射为了位置
    for (let k = 0; k < allows.length; k++) {
      let num = `${allows[k]}`;
      // * 假设那个时候值为这个 然后试验 直到触碰到结束条件
      board[i][j] = num;
      hash_r[i][num] = 1;
      hash_c[j][num] = 1;
      hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
        num
      ] = 1;
      solveItem(index + 1);
      if (solved) break;
      else {
        //* 回溯 不行就再来 每个值 都试验一下
        board[i][j] = ".";
        hash_r[i][num] = 0;
        hash_c[j][num] = 0;
        hash_b[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          num
        ] = 0;
      }
      //       console.log('col')
      //   console.log(hash_c)
      //    console.log('row')
      //   console.log(hash_r)
      //     console.log('3x3')
      //   console.log(hash_b)
    }
  };

  while (!solved) solveItem(0);
  return board;
};

solveSudoku(board);
