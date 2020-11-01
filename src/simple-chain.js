const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
   return this.chain.length;
  },
  addLink(value) {
   return this.chain.push(value);
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
    }
    return this.chain.splice(position -1, 1);
  },

  reverseChain() {
    return this.chain.reverse();
  },
  finishChain() {
    result = '';
    for (let i = 0; i < this.chain.length; i++){
      results += `( ${this.chain[i]} )`;
      if (i < this.chain.length - 1)
      {
        results += '~~'
      }
    }
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
