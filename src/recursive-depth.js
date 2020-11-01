const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let result = [];
    counter +=1;
    result.push(counter);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])){
        this.calculateDepth(arr[i]);
      }
    }
   return counter
  }
};