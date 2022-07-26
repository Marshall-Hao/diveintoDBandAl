Array.prototype.selectionSort = function () {
  // * time O(n^2)
  for (let i = 0; i < this.length - 1; i += 1) {
    let indexMin = i;
    for (let j = i; j < this.length; j += 1) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }
  }
};
