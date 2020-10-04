const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {return "Unable to determine the time of year!"}
  
  const month = date.getMonth();
  switch(month) {
      case month < 2:
          return 'winter';
          break;
      case month < 5:
          return 'spring';
          break;
      case month < 8:
          return 'summer';
          break;
      case month < 11:
          return 'autumn';
          break;    
      case month < 12:
          return 'winter';
          break;
  } 
};
