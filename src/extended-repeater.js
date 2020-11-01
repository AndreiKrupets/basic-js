const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = parseInt(options.repeatTimes);
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    
    for (let k =0; k < additionRepeatTimes; k++) {
      result += addition;
      if (k + 1 < additionRepeatTimes) {
        result += additionSeparator;
      }
    }
    if (i + 1 < repeatTimes) {
      result += separator;
    }
  }
  return result
};
  