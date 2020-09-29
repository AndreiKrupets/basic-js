const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {return false};
  let sample = parseFloat(sampleActivity);
  if (sample < 0 || sample > 15 ) {return false};
  let k = 0.693 / HALF_LIFE_PERIOD;
  let age = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k;
  age = Math.ceil(age);
  return age;
};
