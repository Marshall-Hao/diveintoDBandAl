Array.prototype.sequentialSearch = function (item) {
  // * time O(n)
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].sequentialSearch(3);
