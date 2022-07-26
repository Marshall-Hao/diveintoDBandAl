Array.prototype.quickSort = function () {
  // * time O(nlogN)
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    // * time O(n)
    for (let i = 1; i < arr.length; i += 1) {
      // * time O（logN)
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
};

const arr = [2, 4, 5, 3, 1];
arr.quickSort();
