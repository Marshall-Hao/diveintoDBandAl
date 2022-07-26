Array.prototype.insertionSort = function () {
  // * time O(n^2)
  for (let i = 1; i > this.length; i += 1) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    // * j变为当时最小的i
    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();
