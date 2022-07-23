const graph = require("./graph");

// * 已经访问过的集合
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  // * 将其加入这个访问集合
  visited.add(n);
  //   * 对graph这个节点array进行遍历，看是否访问没访问
  graph[n].forEach((c) => {
    // * 访问过的就不在访问
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

dfs(2);
