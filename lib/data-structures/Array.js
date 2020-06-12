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

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[--this.length];
  }
}

export default Array;
