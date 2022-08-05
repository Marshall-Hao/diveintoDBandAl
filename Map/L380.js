var RandomizedSet = function () {
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  return this.map.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const array = [...this.map.keys()];
  const randomIndex = Math.floor(
    Math.random() * array.length
  );
  return array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
