/**
 * UniqArray (https://github.com/wtetsu/uniqlist/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

class UniqArray {
  constructor() {
    this.array = [];
    this.keys = new Set();
    this.filter = null;
  }

  get(index) {
    return this.array[index];
  }

  size() {
    return this.array.length;
  }

  push(newItem, key = null) {
    if (this.filter !== null && !this.filter(newItem, key)) {
      return;
    }
    const actualKey = key || newItem;
    if (this.keys.has(actualKey)) {
      return;
    }
    this.array.push(newItem);
    this.keys.add(actualKey);
  }

  merge(anotherArray, keys = []) {
    for (let i = 0; i < anotherArray.length; i++) {
      this.push(anotherArray[i], keys[i]);
    }
  }

  toArray() {
    return [].concat(this.array);
  }
}

module.exports = UniqArray;
