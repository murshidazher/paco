class Array {
  /**
   * Initializes an array.
   * @param {number} length Length of the array.
   * @param {*} data Default value to initialize each position of the array to.
   * @return {undefined}
   */
  constructor(length = 0, data = {}) {
    this.length = length;
    this.data = {};
  }

  /**
   * Return a value of the soecified index.
   * @param {number} index Length of the array.
   * @return {undefined} value.
   */
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

export default Array;
