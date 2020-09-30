const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let counter = 0;
    for(let part of matrix) {
      for (let unit of part) {
        if (unit === '^^') {
          counter += 1
        }
      }
    }
  return counter
};
