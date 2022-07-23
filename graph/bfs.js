const graph = require("./graph");

const visited = new Set();
visited.add(2);
const q = [2];
while (q.length) {
  const c = q.shift();
  console.log(c);
  graph[c].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      //   * 放到这儿是防止把重复的元素加到队列里，因为有可能在队列里而不在visited里 造成重复
      visited.add(c);
    }
  });
}
